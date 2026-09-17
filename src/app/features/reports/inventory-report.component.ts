import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../core/services/domain.services';
import { InventoryReport } from '../../core/models/models';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { LoadingComponent, EmptyStateComponent } from '../../shared/ui/misc';
import { BarChartComponent } from '../../shared/charts/charts';

@Component({
  selector: 'app-inventory-report',
  standalone: true,
  imports: [CommonModule, MoneyPipe, LoadingComponent, EmptyStateComponent, BarChartComponent],
  templateUrl: './inventory-report.component.html',
  styleUrl: './reports.shared.scss',
})
export class InventoryReportComponent {
  private reports = inject(ReportService);
  loading = signal(true);
  data = signal<InventoryReport | null>(null);
  topUsed = computed(() => (this.data()?.topUsedIngredients ?? []).map(i => ({ label: `${i.name} (${i.unit})`, value: Math.round(i.quantityUsed) })));
  constructor() {
    this.reports.inventory().subscribe({ next: d => { this.data.set(d); this.loading.set(false); }, error: () => this.loading.set(false) });
  }
}
