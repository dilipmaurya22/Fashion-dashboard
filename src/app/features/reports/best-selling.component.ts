import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../core/services/domain.services';
import { TopFashion } from '../../core/models/models';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { LoadingComponent, EmptyStateComponent } from '../../shared/ui/misc';
import { BarChartComponent } from '../../shared/charts/charts';

@Component({
  selector: 'app-best-selling',
  standalone: true,
  imports: [CommonModule, MoneyPipe, LoadingComponent, EmptyStateComponent, BarChartComponent],
  templateUrl: './best-selling.component.html',
  styleUrl: './reports.shared.scss',
})
export class BestSellingComponent {
  private reports = inject(ReportService);
  loading = signal(true);
  data = signal<TopFashion[]>([]);
  range = signal<'7' | '30' | '90'>('30');
  ranges = [{ k: '7', l: '7 Days' }, { k: '30', l: '30 Days' }, { k: '90', l: '90 Days' }];

  chart = computed(() => this.data().slice(0, 8).map(t => ({ label: t.name, value: t.quantitySold })));

  constructor() { this.load(); }
  setRange(r: any) { this.range.set(r); this.load(); }
  load() {
    this.loading.set(true);
    const now = new Date(); const start = new Date(now); start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - (+this.range() - 1));
    this.reports.bestSelling(start.toISOString()).subscribe({ next: d => { this.data.set(d); this.loading.set(false); }, error: () => this.loading.set(false) });
  }
}
