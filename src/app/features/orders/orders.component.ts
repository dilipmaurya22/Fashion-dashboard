import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { OrderService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { ConfirmService } from '../../shared/ui/confirm';
import { OrderListItem, PagedResult } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { OrderStatusBadge } from '../../shared/ui/badges';
import { LoadingComponent, EmptyStateComponent, SpinnerComponent } from '../../shared/ui/misc';
import { PaginatorComponent } from '../../shared/ui/paginator';
import { ReceiptDialogComponent } from './receipt-dialog.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IconComponent, MoneyPipe, OrderStatusBadge,
    LoadingComponent, EmptyStateComponent, SpinnerComponent, PaginatorComponent, ReceiptDialogComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  private orderSvc = inject(OrderService);
  private toast = inject(ToastService);
  private confirm = inject(ConfirmService);

  loading = signal(true);
  result = signal<PagedResult<OrderListItem> | null>(null);
  page = signal(1);
  search = signal('');
  status = signal('');
  orderType = signal('');
  paymentMethod = signal('');
  receiptId = signal<number | null>(null);
  menuFor = signal<number | null>(null);
  menuPos = signal<{ top: number; left: number } | null>(null);
  busyId = signal<number | null>(null);
  activeOrder = computed(() => this.result()?.items.find(o => o.id === this.menuFor()) ?? null);

  private searchSubject = new Subject<string>();
  statuses = ['Pending', 'Preparing', 'Ready', 'Completed', 'Cancelled'];
  types = ['DineIn', 'Takeaway', 'Parcel'];
  methods = ['Cash', 'Upi', 'Card', 'Other'];

  constructor() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe(v => {
      this.search.set(v); this.page.set(1); this.load();
    });
    this.load();
  }

  onSearch(v: string) { this.searchSubject.next(v); }
  changeFilter() { this.page.set(1); this.load(); }
  goPage(p: number) { this.page.set(p); this.load(); }

  load() {
    this.loading.set(true);
    this.orderSvc.orders({
      page: this.page(), pageSize: 15, search: this.search(),
      status: this.status(), orderType: this.orderType(), paymentMethod: this.paymentMethod(),
    }).subscribe({
      next: r => { this.result.set(r); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  clearFilters() {
    this.status.set(''); this.orderType.set(''); this.paymentMethod.set(''); this.search.set('');
    this.page.set(1); this.load();
  }

  openMenu(o: OrderListItem, ev: MouseEvent) {
    ev.stopPropagation();
    if (this.menuFor() === o.id) { this.menuFor.set(null); return; }
    const rect = (ev.currentTarget as HTMLElement).getBoundingClientRect();
    this.menuPos.set({ top: rect.bottom + 6, left: Math.max(12, rect.right - 184) });
    this.menuFor.set(o.id);
  }
  closeMenu() { this.menuFor.set(null); }

  /** Valid next actions for the given order status. */
  actionsFor(status: string): { label: string; status: string; kind: 'ok' | 'danger' | '' }[] {
    if (status === 'Completed' || status === 'Cancelled') return [];
    const acts: { label: string; status: string; kind: 'ok' | 'danger' | '' }[] = [];
    if (status === 'Pending') acts.push({ label: 'Mark Preparing', status: 'Preparing', kind: '' });
    if (status === 'Preparing') acts.push({ label: 'Mark Ready', status: 'Ready', kind: '' });
    acts.push({ label: 'Complete Billing', status: 'Completed', kind: 'ok' });
    acts.push({ label: 'Cancel Billing', status: 'Cancelled', kind: 'danger' });
    return acts;
  }

  async changeStatus(o: OrderListItem, status: string) {
    this.menuFor.set(null);
    if (status === 'Cancelled') {
      const ok = await this.confirm.ask({ title: 'Cancel this order?', message: `${o.orderNumber} will be cancelled. This cannot be undone.`, confirmText: 'Cancel Order', danger: true });
      if (!ok) return;
    }
    this.busyId.set(o.id);
    const req = status === 'Completed' ? this.orderSvc.complete(o.id)
      : status === 'Cancelled' ? this.orderSvc.cancel(o.id)
      : this.orderSvc.setStatus(o.id, status);
    req.subscribe({
      next: () => { this.busyId.set(null); this.toast.success(`${o.orderNumber} → ${status}.`); this.load(); },
      error: () => { this.busyId.set(null); this.load(); },
    });
  }
}
