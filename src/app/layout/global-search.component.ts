import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, forkJoin } from 'rxjs';
import { CatalogService, CustomerService, OrderService } from '../core/services/domain.services';
import { Customer, FashionItem, OrderListItem } from '../core/models/models';
import { IconComponent } from '../shared/icon/icon.component';
import { MoneyPipe } from '../shared/pipes/money.pipe';
import { OrderStatusBadge } from '../shared/ui/badges';
import { SpinnerComponent } from '../shared/ui/misc';

/** Global search across orders, fashion items and customers with a results dropdown. */
@Component({
  selector: 'app-global-search',
  standalone: true,
  imports: [CommonModule, IconComponent, MoneyPipe, OrderStatusBadge, SpinnerComponent],
  templateUrl: './global-search.component.html',
  styleUrl: './global-search.component.scss',
})
export class GlobalSearchComponent {
  private orders = inject(OrderService);
  private catalog = inject(CatalogService);
  private customers = inject(CustomerService);
  private router = inject(Router);

  query = signal('');
  open = signal(false);
  loading = signal(false);
  orderResults = signal<OrderListItem[]>([]);
  fashionResults = signal<FashionItem[]>([]);
  customerResults = signal<Customer[]>([]);
  hasResults = computed(() =>
    this.orderResults().length + this.fashionResults().length + this.customerResults().length > 0);

  private input$ = new Subject<string>();
  constructor() {
    this.input$.pipe(debounceTime(280), distinctUntilChanged()).subscribe(q => this.run(q));
  }

  onInput(v: string) {
    this.query.set(v);
    const q = v.trim();
    if (q.length >= 2) { this.open.set(true); this.loading.set(true); this.input$.next(q); }
    else { this.open.set(false); this.clearResults(); }
  }

  private run(q: string) {
    forkJoin({
      o: this.orders.orders({ page: 1, pageSize: 5, search: q }),
      f: this.catalog.fashionItems({ page: 1, pageSize: 5, search: q }),
      c: this.customers.customers({ page: 1, pageSize: 5, search: q }),
    }).subscribe({
      next: ({ o, f, c }) => {
        this.orderResults.set(o.items); this.fashionResults.set(f.items); this.customerResults.set(c.items);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  go(path: any[]) { this.close(); this.query.set(''); this.clearResults(); this.router.navigate(path); }
  close() { this.open.set(false); }
  clearInput() { this.query.set(''); this.close(); this.clearResults(); }
  private clearResults() { this.orderResults.set([]); this.fashionResults.set([]); this.customerResults.set([]); }
}
