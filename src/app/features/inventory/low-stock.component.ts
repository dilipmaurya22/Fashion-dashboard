import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InventoryService } from '../../core/services/domain.services';
import { Ingredient } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { StockStatusBadge } from '../../shared/ui/badges';
import { LoadingComponent, EmptyStateComponent } from '../../shared/ui/misc';
import { PaginatorComponent } from '../../shared/ui/paginator';

@Component({
  selector: 'app-low-stock',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, MoneyPipe, StockStatusBadge, LoadingComponent, EmptyStateComponent, PaginatorComponent],
  templateUrl: './low-stock.component.html',
  styleUrl: './low-stock.component.scss',
})
export class LowStockComponent {
  private inv = inject(InventoryService);
  loading = signal(true);
  items = signal<Ingredient[]>([]);

  // client-side pagination (10 per page)
  page = signal(1);
  pageSize = 10;
  totalPages = computed(() => Math.max(1, Math.ceil(this.items().length / this.pageSize)));
  paged = computed(() => this.items().slice((this.page() - 1) * this.pageSize, this.page() * this.pageSize));
  goPage(p: number) { this.page.set(p); }

  constructor() {
    this.inv.lowStock().subscribe({ next: i => { this.items.set(i); this.loading.set(false); }, error: () => this.loading.set(false) });
  }
}
