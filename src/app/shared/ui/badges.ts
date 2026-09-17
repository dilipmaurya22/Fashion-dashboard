import { Component, Input, computed, signal } from '@angular/core';

const ORDER_MAP: Record<string, { cls: string; label: string }> = {
  Pending:   { cls: 'badge-warning', label: 'Pending' },
  Preparing: { cls: 'badge-info',    label: 'Preparing' },
  Ready:     { cls: 'badge-success', label: 'Ready' },
  Completed: { cls: 'badge-success', label: 'Completed' },
  Cancelled: { cls: 'badge-danger',  label: 'Cancelled' },
};

@Component({
  selector: 'app-order-status',
  standalone: true,
  template: `<span class="badge {{cls()}}"><span class="dot"></span>{{label()}}</span>`,
})
export class OrderStatusBadge {
  private _s = signal('Pending');
  @Input() set status(v: string) { this._s.set(v); }
  cls = computed(() => ORDER_MAP[this._s()]?.cls ?? 'badge-neutral');
  label = computed(() => ORDER_MAP[this._s()]?.label ?? this._s());
}

const STOCK_MAP: Record<string, string> = {
  'Available': 'badge-success',
  'Low Stock': 'badge-warning',
  'Out of Stock': 'badge-danger',
};

@Component({
  selector: 'app-stock-status',
  standalone: true,
  template: `<span class="badge {{cls()}}"><span class="dot"></span>{{_s()}}</span>`,
})
export class StockStatusBadge {
  _s = signal('Available');
  @Input() set status(v: string) { this._s.set(v); }
  cls = computed(() => STOCK_MAP[this._s()] ?? 'badge-neutral');
}
