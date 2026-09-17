import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrinterService } from '../../core/services/printer.service';
import { HelperTarget } from '../../core/services/print-helper-client';
import { ToastService } from '../../core/services/toast.service';
import { IconComponent } from '../../shared/icon/icon.component';
import { SpinnerComponent } from '../../shared/ui/misc';

type Tab = 'windows' | 'com' | 'network';

@Component({
  selector: 'app-printer-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, SpinnerComponent],
  templateUrl: './printer.component.html',
  styleUrl: './printer.component.scss',
})
export class PrinterSettingsComponent {
  printer = inject(PrinterService);
  private toast = inject(ToastService);

  busy = signal<'' | 'connect' | 'test' | 'refresh'>('');
  tab = signal<Tab>('windows');
  showConnect = signal(false);   // expand the picker (auto-open when not connected)

  // connection inputs
  selectedPrinter = signal('');
  comPath = signal('');
  comBaud = signal(9600);
  netHost = signal('');
  netPort = signal(9100);

  // printers/ports come live from the helper via the service
  printers = this.printer.printers;
  ports = this.printer.ports;

  constructor() { void this.loadDevices(); }

  /** Re-check the helper (populates printers/ports signals) and preselect sensible defaults. */
  async loadDevices() {
    await this.printer.refresh();
    if (!this.printer.helperRunning) return;
    if (!this.selectedPrinter() && this.printers().length) this.selectedPrinter.set(this.printers()[0]);
    if (!this.comPath() && this.ports().length) this.comPath.set(this.ports()[0]);
    // when nothing is connected yet, open the picker straight away
    this.showConnect.set(!this.printer.connected);
  }

  toggleConnect() { this.showConnect.update(v => !v); }

  async refreshHelper() {
    this.busy.set('refresh');
    try { await this.loadDevices(); }
    finally { this.busy.set(''); }
  }

  setTab(t: Tab) { this.tab.set(t); }
  setPaper(w: 58 | 80) { this.printer.setPaperWidth(w); }

  private buildTarget(): HelperTarget | null {
    if (this.tab() === 'windows') {
      const name = this.selectedPrinter().trim();
      if (!name) { this.toast.error('Pick a printer from the list.'); return null; }
      return { type: 'windows', printerName: name };
    }
    if (this.tab() === 'com') {
      const port = this.comPath().trim();
      if (!port) { this.toast.error('Enter or pick the COM port (e.g. COM3).'); return null; }
      return { type: 'serial', port, baud: +this.comBaud() || 9600 };
    }
    const ip = this.netHost().trim();
    if (!ip) { this.toast.error('Enter the printer IP address.'); return null; }
    return { type: 'network', ip, tcpPort: +this.netPort() || 9100 };
  }

  async connect() {
    const target = this.buildTarget();
    if (!target) return;
    this.busy.set('connect');
    try { await this.printer.connect(target); this.toast.success('Printer connected.'); this.showConnect.set(false); }
    catch (e: any) { this.toast.error(e?.message || 'Could not connect to the printer.'); }
    finally { this.busy.set(''); }
  }

  async testPrint() {
    this.busy.set('test');
    try { await this.printer.printTest(); this.toast.success('Test sent to printer.'); }
    catch (e: any) { this.toast.error(e?.message || 'Print failed.'); }
    finally { this.busy.set(''); }
  }

  async disconnect() {
    await this.printer.disconnect();
    this.showConnect.set(true);
    this.toast.info('Printer disconnected.');
  }
}
