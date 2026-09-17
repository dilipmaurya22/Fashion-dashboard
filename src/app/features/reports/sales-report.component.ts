import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../core/services/domain.services';
import { SalesReport } from '../../core/models/models';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { LoadingComponent } from '../../shared/ui/misc';
import { LineChartComponent } from '../../shared/charts/charts';

@Component({
  selector: 'app-sales-report',
  standalone: true,
  imports: [CommonModule, MoneyPipe, LoadingComponent, LineChartComponent],
  templateUrl: './sales-report.component.html',
  styleUrl: './reports.shared.scss',
})
export class SalesReportComponent {
  private reports = inject(ReportService);
  loading = signal(true);
  data = signal<SalesReport | null>(null);
  range = signal<'today' | 'yesterday' | '7' | '30'>('7');
  ranges = [{ k: 'today', l: 'Today' }, { k: 'yesterday', l: 'Yesterday' }, { k: '7', l: '7 Days' }, { k: '30', l: '30 Days' }];

  series = computed(() => (this.data()?.series ?? []).map(p => ({ label: p.label, value: p.sales })));

  constructor() { this.load(); }

  setRange(r: any) { this.range.set(r); this.load(); }

  private bounds(): { from?: string; to?: string } {
    const now = new Date();
    const start = new Date(now); start.setHours(0, 0, 0, 0);
    if (this.range() === 'today') return { from: start.toISOString() };
    if (this.range() === 'yesterday') {
      const y = new Date(start); y.setDate(y.getDate() - 1);
      return { from: y.toISOString(), to: start.toISOString() };
    }
    const days = +this.range();
    const f = new Date(start); f.setDate(f.getDate() - (days - 1));
    return { from: f.toISOString() };
  }

  load() {
    this.loading.set(true);
    const { from, to } = this.bounds();
    this.reports.sales(from, to).subscribe({ next: d => { this.data.set(d); this.loading.set(false); }, error: () => this.loading.set(false) });
  }

  methodClass(m: string) { return m === 'Cash' ? 'badge-success' : m === 'Upi' ? 'badge-info' : m === 'Card' ? 'badge-warning' : 'badge-neutral'; }
}
