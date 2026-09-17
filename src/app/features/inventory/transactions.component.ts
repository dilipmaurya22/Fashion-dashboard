import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryService } from '../../core/services/domain.services';
import { InventoryTransaction, PagedResult } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { LoadingComponent, EmptyStateComponent } from '../../shared/ui/misc';
import { PaginatorComponent } from '../../shared/ui/paginator';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, LoadingComponent, EmptyStateComponent, PaginatorComponent],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent {
  private inv = inject(InventoryService);
  loading = signal(true);
  result = signal<PagedResult<InventoryTransaction> | null>(null);
  page = signal(1);
  type = signal('');
  types = ['Purchase', 'Sale', 'Adjustment', 'Return', 'Damage', 'Transfer'];

  constructor() { this.load(); }
  load() {
    this.loading.set(true);
    this.inv.transactions({ page: this.page(), pageSize: 20, type: this.type() })
      .subscribe({ next: r => { this.result.set(r); this.loading.set(false); }, error: () => this.loading.set(false) });
  }
  changeFilter() { this.page.set(1); this.load(); }
  goPage(p: number) { this.page.set(p); this.load(); }
  badgeClass(t: string) {
    return t === 'Purchase' ? 'badge-success' : t === 'Sale' ? 'badge-info'
      : t === 'Wastage' ? 'badge-danger' : 'badge-warning';
  }
}
