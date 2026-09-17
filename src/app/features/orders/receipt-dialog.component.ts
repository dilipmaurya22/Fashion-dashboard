import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { PrinterService } from '../../core/services/printer.service';
import { Receipt } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { SpinnerComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-receipt-dialog',
  standalone: true,
  imports: [CommonModule, IconComponent, SpinnerComponent],
  templateUrl: './receipt-dialog.component.html',
  styleUrl: './receipt-dialog.component.scss',
})
export class ReceiptDialogComponent implements OnInit {
  @Input({ required: true }) orderId!: number;
  @Input() showComplete = false;
  @Output() closed = new EventEmitter<boolean>();

  private orders = inject(OrderService);
  private toast = inject(ToastService);
  printer = inject(PrinterService);

  receipt = signal<Receipt | null>(null);
  completing = signal(false);
  printing = signal(false);
  connecting = signal<'' | 'connect'>('');

  ngOnInit() { this.orders.receipt(this.orderId).subscribe(r => this.receipt.set(r)); }

  /** Relink the last-used printer (the printer is chosen once in Printer Settings). */
  async connect() {
    this.connecting.set('connect');
    try {
      await this.printer.refresh();
      await this.printer.reconnect();
      if (this.printer.connected) this.toast.success('Printer connected.');
      else if (!this.printer.helperRunning) this.toast.error('Print Helper is not running on this computer.');
      else this.toast.error('No printer set up yet — add one in Printer Settings.');
    } catch (e: any) { this.toast.error(e?.message || 'Connection failed.'); }
    finally { this.connecting.set(''); }
  }
  /** Clone only the receipt into a body-level container so the browser prints just the slip (not the whole app). */
  browserPrint() {
    const el = document.querySelector('app-receipt-dialog .receipt') as HTMLElement | null;
    if (!el) { window.print(); return; }
    document.getElementById('print-receipt')?.remove();
    const holder = document.createElement('div');
    holder.id = 'print-receipt';
    holder.appendChild(el.cloneNode(true));
    document.body.appendChild(holder);
    document.body.classList.add('printing-receipt');
    const cleanup = () => {
      document.getElementById('print-receipt')?.remove();
      document.body.classList.remove('printing-receipt');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    setTimeout(() => window.print(), 60);
  }

  /** Sends to the connected thermal printer if one is set up, else opens the browser print dialog. */
  async print() {
    const r = this.receipt();
    if (r && this.printer.connected) {
      this.printing.set(true);
      try { await this.printer.printReceipt(r); this.toast.success('Sent to printer.'); }
      catch (e: any) { this.toast.error(e?.message || 'Print failed — using browser print.'); this.browserPrint(); }
      finally { this.printing.set(false); }
      return;
    }
    this.browserPrint();
  }

  complete() {
    this.completing.set(true);
    this.orders.complete(this.orderId).subscribe({
      next: () => { this.completing.set(false); this.toast.success('Billing completed & inventory updated.'); this.closed.emit(true); },
      error: () => this.completing.set(false),
    });
  }

  close() { this.closed.emit(false); }
}
