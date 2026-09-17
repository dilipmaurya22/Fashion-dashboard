import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { ConfirmService } from '../../shared/ui/confirm';
import { Order } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { OrderStatusBadge } from '../../shared/ui/badges';
import { LoadingComponent } from '../../shared/ui/misc';
import { ReceiptDialogComponent } from './receipt-dialog.component';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, MoneyPipe, OrderStatusBadge, LoadingComponent, ReceiptDialogComponent],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
})
export class OrderDetailComponent implements OnInit {
  @Input() id!: string;   // from route param via component input binding
  private orders = inject(OrderService);
  private toast = inject(ToastService);
  private confirm = inject(ConfirmService);

  loading = signal(true);
  order = signal<Order | null>(null);
  busy = signal(false);
  showReceipt = signal(false);

  /** Total at MRP across the bill (falls back to the selling price when a line has no MRP). */
  mrpTotal = computed(() =>
    (this.order()?.items ?? []).reduce((s, i) => s + ((i.mrp && i.mrp > 0) ? i.mrp : i.unitPrice) * i.quantity, 0));
  /** MRP − selling savings (before any extra discount). */
  productDiscount = computed(() => {
    const o = this.order(); if (!o) return 0;
    return Math.max(0, +(this.mrpTotal() - o.subtotal).toFixed(2));
  });

  /** Route param is a Guid string — pass it through as-is (never +this.id, which is NaN for a Guid). */
  private get oid(): number { return this.id as unknown as number; }

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.orders.order(this.oid).subscribe({
      next: o => { this.order.set(o); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  setStatus(status: string) {
    this.busy.set(true);
    this.orders.setStatus(this.oid, status).subscribe({
      next: o => { this.order.set(o); this.busy.set(false); this.toast.success(`Marked ${status}.`); },
      error: () => { this.busy.set(false); this.load(); },
    });
  }

  complete() {
    this.busy.set(true);
    this.orders.complete(this.oid).subscribe({
      next: o => { this.order.set(o); this.busy.set(false); this.toast.success('Billing completed & inventory updated.'); },
      error: () => { this.busy.set(false); this.load(); },
    });
  }

  async cancel() {
    const ok = await this.confirm.ask({
      title: 'Cancel this billing?', message: 'This cannot be undone. Inventory will not be deducted.',
      confirmText: 'Cancel Billing', danger: true,
    });
    if (!ok) return;
    this.busy.set(true);
    this.orders.cancel(this.oid).subscribe({
      next: o => { this.order.set(o); this.busy.set(false); this.toast.success('Billing cancelled.'); },
      error: () => this.busy.set(false),
    });
  }

  can(status: string): boolean {
    const s = this.order()?.status;
    if (!s || s === 'Completed' || s === 'Cancelled') return false;
    const flow = ['Pending', 'Preparing', 'Ready', 'Completed'];
    return flow.indexOf(status) === flow.indexOf(s) + 1;
  }
  isFinal(): boolean {
    const s = this.order()?.status;
    return s === 'Completed' || s === 'Cancelled';
  }
}
