import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CustomerService } from '../../core/services/domain.services';
import { Customer, OrderListItem } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { OrderStatusBadge } from '../../shared/ui/badges';
import { LoadingComponent, EmptyStateComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, MoneyPipe, OrderStatusBadge, LoadingComponent, EmptyStateComponent],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss',
})
export class CustomerDetailComponent implements OnInit {
  @Input() id!: string;
  private svc = inject(CustomerService);
  loading = signal(true);
  customer = signal<Customer | null>(null);
  orders = signal<OrderListItem[]>([]);

  ngOnInit() {
    const id = this.id as unknown as number;   // route param is a Guid string — pass through as-is
    forkJoin({ c: this.svc.customer(id), o: this.svc.customerOrders(id) }).subscribe({
      next: ({ c, o }) => { this.customer.set(c); this.orders.set(o); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
  avg(): number {
    const c = this.customer();
    return c && c.totalOrders ? c.totalSpent / c.totalOrders : 0;
  }
}
