/**
 * Client for the local "Print Helper" (PrintHelper.exe) running on the same PC at
 * http://localhost:9100. The helper owns the actual thermal printer (Windows driver,
 * serial/COM, or network) and prints raw ESC/POS bytes we send it. This is a faithful
 * TypeScript port of the helper's own print-helper-client.js — endpoints and shapes
 * must match the running helper exactly.
 *
 * Endpoints:  GET /status · GET /ports · GET /printers · POST /connect · POST /disconnect · POST /print (octet-stream)
 */

const DEFAULT_BASE = 'http://localhost:9100';

/** ESC/POS byte builder. 32 chars = 58mm, 48 = 80mm. */
export class EscPos {
  private b: number[] = [];
  constructor(public width = 32) {}
  raw(s: string) { for (const ch of String(s)) { const c = ch.charCodeAt(0); this.b.push(c < 128 ? c : 0x3f); } return this; }
  push(...bytes: number[]) { this.b.push(...bytes); return this; }
  init() { return this.push(0x1b, 0x40); }
  /** constrain print area so a narrow roll in a wider printer isn't cut (58mm=384 dots, 80mm=576) */
  areaWidth(dots: number) { return this.push(0x1d, 0x57, dots & 0xff, (dots >> 8) & 0xff); }
  align(a: 'left' | 'center' | 'right') { return this.push(0x1b, 0x61, a === 'center' ? 1 : a === 'right' ? 2 : 0); }
  bold(on: boolean) { return this.push(0x1b, 0x45, on ? 1 : 0); }
  size(n: 1 | 2) { return this.push(0x1d, 0x21, n === 2 ? 0x11 : 0x00); }
  text(s: string) { return this.raw(s); }
  line(s = '') { return this.raw(s).push(0x0a); }
  feed(n = 1) { for (let i = 0; i < n; i++) this.b.push(0x0a); return this; }
  cut() { return this.push(0x1d, 0x56, 0x00); }
  /** left + right justified on one line of `width` chars */
  row(left: string, right: string) {
    const gap = Math.max(1, this.width - String(left).length - String(right).length);
    return this.line(left + ' '.repeat(gap) + right);
  }
  divider(ch = '-') { return this.line(ch.repeat(this.width)); }
  bytes() { return new Uint8Array(this.b); }
}

export type HelperTarget =
  | { type: 'windows'; printerName: string }
  | { type: 'serial'; port: string; baud?: number }
  | { type: 'network'; ip: string; tcpPort?: number };

export interface HelperStatus {
  ok?: boolean;
  connected: boolean;
  target?: HelperTarget & Record<string, unknown>;
  ports?: string[];
  printers?: string[];
}

export class PrintHelper {
  constructor(private base = DEFAULT_BASE) {}

  private async json(path: string, opts?: RequestInit): Promise<any> {
    const res = await fetch(this.base + path, opts);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || ('HTTP ' + res.status));
    return data;
  }

  /** Is the helper running? true/false, never throws. Uses /status (helper has no /health). */
  async isRunning(timeoutMs = 1500): Promise<boolean> {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), timeoutMs);
    try { const r = await fetch(this.base + '/status', { signal: ac.signal }); return r.ok; }
    catch { return false; }
    finally { clearTimeout(t); }
  }

  /** { ok, connected, target, ports[], printers[] } */
  status(): Promise<HelperStatus> { return this.json('/status'); }
  ports(): Promise<string[]> { return this.json('/ports').then(r => r.ports || []); }
  printers(): Promise<string[]> { return this.json('/printers').then(r => r.printers || []); }

  /** Select a printer (helper remembers it across refreshes / reboots). */
  async connect(target: HelperTarget): Promise<HelperStatus> {
    const s = await this.json('/connect', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(target),
    });
    if (!s.connected) throw new Error('Could not connect. Check the printer is on and reachable.');
    return s;
  }

  disconnect(): Promise<any> { return this.json('/disconnect', { method: 'POST' }); }

  /** Send raw ESC/POS bytes to the printer. */
  async printBytes(bytes: Uint8Array): Promise<boolean> {
    const res = await fetch(this.base + '/print', {
      method: 'POST', headers: { 'Content-Type': 'application/octet-stream' }, body: bytes,
    });
    const data = await res.json().catch(() => ({ ok: false }));
    if (!res.ok || !data.ok) throw new Error(data.error || 'Print failed.');
    return true;
  }
}
