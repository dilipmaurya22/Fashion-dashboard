import { Injectable, signal } from '@angular/core';
import { Receipt } from '../models/models';
import { PrintHelper, HelperTarget, EscPos } from './print-helper-client';

/**
 * Printing goes through the local Print Helper (PrintHelper.exe on localhost:9100).
 * This service tracks the helper (running?), the connected printer and paper width,
 * builds the bill as ESC/POS bytes and hands them to the helper to print.
 */
@Injectable({ providedIn: 'root' })
export class PrinterService {
  private helper = new PrintHelper();
  private readonly LS_CONN = 'fc_printer_conn';    // last connection target (for auto-reconnect)
  private readonly LS_PAPER = 'fc_paper_width';

  readonly running = signal(false);                 // Print Helper reachable on localhost:9100
  readonly status = signal<'disconnected' | 'connected'>('disconnected');
  readonly deviceName = signal('');
  readonly connType = signal<'windows' | 'serial' | 'network' | null>(null);
  readonly paperWidth = signal<58 | 80>(58);
  readonly printers = signal<string[]>([]);
  readonly ports = signal<string[]>([]);

  get connected(): boolean { return this.status() === 'connected'; }
  get helperRunning(): boolean { return this.running(); }

  constructor() {
    try { if (Number(localStorage.getItem(this.LS_PAPER)) === 80) this.paperWidth.set(80); } catch { /* ignore */ }
    void this.refresh();
    // keep the connection state live: if the printer goes offline / is switched off, the helper
    // reports it and the badge flips to "disconnected" on its own (and back when it returns).
    setInterval(() => {
      if (this.running()) void this.syncStatus();
      else void this.refresh();
    }, 8000);
  }

  /** Re-check the helper, sync its live status, and relink the last-used printer if needed. */
  async refresh(): Promise<void> {
    const up = await this.helper.isRunning();
    this.running.set(up);
    if (!up) { this.status.set('disconnected'); this.printers.set([]); this.ports.set([]); return; }
    await this.syncStatus();
    if (!this.connected) await this.reconnect();    // fresh page / helper restart -> relink last printer
  }

  private async syncStatus(): Promise<void> {
    const s = await this.helper.status();
    this.printers.set(s.printers ?? []);
    this.ports.set(s.ports ?? []);
    if (s.connected) {
      this.status.set('connected');
      const t: any = s.target || {};
      if (t.type) this.connType.set(t.type);
      this.deviceName.set(this.labelFor(t));
    } else {
      this.status.set('disconnected');
    }
  }

  listPrinters(): Promise<string[]> { return this.running() ? this.helper.printers() : Promise.resolve([]); }
  listPorts(): Promise<string[]> { return this.running() ? this.helper.ports() : Promise.resolve([]); }

  setPaperWidth(w: 58 | 80): void {
    this.paperWidth.set(w);
    try { localStorage.setItem(this.LS_PAPER, String(w)); } catch { /* ignore */ }
  }

  async connect(target: HelperTarget): Promise<void> {
    if (!this.running()) throw new Error('Print Helper is not running. Start PrintHelper.exe on this computer, then try again.');
    await this.helper.connect(target);
    try { localStorage.setItem(this.LS_CONN, JSON.stringify(target)); } catch { /* ignore */ }
    this.connType.set(target.type);
    this.deviceName.set(this.labelFor(target));
    this.status.set('connected');
  }

  /** Reconnect the last-used printer silently (on page load / after a helper restart). */
  async reconnect(): Promise<void> {
    let raw: string | null = null;
    try { raw = localStorage.getItem(this.LS_CONN); } catch { /* ignore */ }
    if (!raw) return;
    try {
      const target = JSON.parse(raw) as HelperTarget;
      await this.helper.connect(target);
      this.connType.set(target.type);
      this.deviceName.set(this.labelFor(target));
      this.status.set('connected');
    } catch { /* printer or helper not ready — stay disconnected */ }
  }

  async disconnect(): Promise<void> {
    try { await this.helper.disconnect(); } catch { /* ignore */ }
    try { localStorage.removeItem(this.LS_CONN); } catch { /* ignore */ }
    this.status.set('disconnected'); this.connType.set(null); this.deviceName.set('');
  }

  private labelFor(t: any): string {
    if (!t) return 'Thermal Printer';
    if (t.type === 'windows') return t.printerName || 'Windows Printer';
    if (t.type === 'serial') return t.port || 'COM Printer';
    if (t.type === 'network') return `${t.ip}:${t.tcpPort ?? 9100}`;
    return 'Thermal Printer';
  }

  // ---------- printing ----------
  async printTest(): Promise<void> {
    if (!this.connected) throw new Error('No printer connected.');
    const eighty = this.paperWidth() === 80;
    const p = new EscPos(eighty ? 48 : 32);
    p.init().areaWidth(eighty ? 576 : 384).align('center')
      .bold(true).size(2).line('NEW LOOK FASHION').size(1).bold(false)
      .line('Printer test successful').line(new Date().toLocaleString())
      .divider().feed(4).cut();
    await this.helper.printBytes(p.bytes());
  }

  async printReceipt(r: Receipt): Promise<void> {
    if (!this.connected) throw new Error('No printer connected.');
    await this.helper.printBytes(this.buildBytes(r));
  }

  /** Build the bill as ESC/POS bytes — mirrors the on-screen receipt layout. */
  private buildBytes(r: Receipt): Uint8Array {
    const eighty = this.paperWidth() === 80;
    const cur = 'Rs.';                 // thermal printers can't render the rupee glyph
    const p = new EscPos(eighty ? 48 : 32);
    p.init().areaWidth(eighty ? 576 : 384).align('center');
    p.bold(true).size(2).line(r.businessName).size(1).bold(false);
    if (r.address) p.line(r.address);
    if (r.mobileNumber) p.line('Ph: ' + r.mobileNumber);
    if (r.gstNumber) p.line('GST: ' + r.gstNumber);
    p.divider().align('left');
    p.line('Bill #' + r.orderNumber);
    p.line(new Date(r.orderDate).toLocaleString());
    if (r.customerName) p.line('Customer: ' + r.customerName);
    p.divider();
    for (const it of r.items) {
      p.line(it.fashionName + (it.variantName ? ' (' + it.variantName + ')' : ''));
      p.row(`  ${it.quantity} x ${cur}${it.unitPrice.toFixed(2)}`, `${cur}${it.lineTotal.toFixed(2)}`);
      if (it.mrp && it.mrp > it.unitPrice) {
        const save = (it.mrp - it.unitPrice) * it.quantity;
        p.line(`  MRP ${cur}${it.mrp.toFixed(2)} (save ${cur}${save.toFixed(2)})`);
      }
    }
    p.divider();
    if (r.mrpTotal && r.mrpTotal > r.subtotal) p.row('MRP Total', cur + r.mrpTotal.toFixed(2));
    if (r.productDiscount && r.productDiscount > 0) p.row('Product Discount', '-' + cur + r.productDiscount.toFixed(2));
    p.row('Subtotal', cur + r.subtotal.toFixed(2));
    if (r.discountAmount > 0) p.row('Extra Discount', '-' + cur + r.discountAmount.toFixed(2));
    if (r.taxAmount > 0) p.row('Tax', cur + r.taxAmount.toFixed(2));
    p.bold(true).row('TOTAL', cur + r.grandTotal.toFixed(2)).bold(false);
    p.divider();
    p.line('Payment: ' + r.paymentMethod);
    p.align('center').feed().line(r.footer || 'Thank You! Visit Again :)').feed(5).cut();
    return p.bytes();
  }
}
