import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReportService } from '../../core/services/domain.services';
import { AnalyticsData } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { LoadingComponent } from '../../shared/ui/misc';
import { CountUpDirective } from '../../shared/ui/count-up.directive';
import { LineChartComponent } from '../../shared/charts/charts';

type RangeKey = '7d' | '30d' | '1y' | 'custom';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IconComponent, MoneyPipe, LoadingComponent, CountUpDirective, LineChartComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  private reports = inject(ReportService);
  loading = signal(true);
  data = signal<AnalyticsData | null>(null);

  ranges: { k: RangeKey; label: string }[] = [
    { k: '7d', label: '7D' }, { k: '30d', label: '30D' }, { k: '1y', label: '1Y' }, { k: 'custom', label: 'Custom' },
  ];
  range = signal<RangeKey>('7d');
  from = signal('');   // yyyy-MM-dd
  to = signal('');
  rangeLabel = computed(() => this.data()?.rangeLabel ?? 'Last 7 days');

  sales = computed(() => (this.data()?.salesOverview ?? []).map(p => ({ label: p.label, value: p.sales })));
  salesTotal = computed(() => (this.data()?.salesOverview ?? []).reduce((a, p) => a + p.sales, 0));

  topSelling = computed(() => {
    const list = this.data()?.topSelling ?? [];
    const max = Math.max(1, ...list.map(t => t.quantitySold));
    return list.map(t => ({ ...t, pct: Math.round((t.quantitySold / max) * 100) }));
  });

  kpis = computed(() => {
    const k = this.data()?.kpis;
    if (!k) return [];
    return [
      { label: 'Sales', value: k.todaysSales, money: true, icon: 'sales', tone: 'orange' },
      { label: 'Orders', value: k.todaysOrders, money: false, icon: 'orders', tone: 'blue' },
      { label: 'Avg Billing Value', value: k.averageOrderValue, money: true, icon: 'payment', tone: 'green' },
      { label: 'Low Stock Items', value: k.lowStockItems, money: false, icon: 'lowstock', tone: 'amber' },
    ];
  });

  constructor() {
    const t = new Date();
    const iso = (d: Date) => d.toISOString().slice(0, 10);
    this.to.set(iso(t));
    this.from.set(iso(new Date(t.getTime() - 6 * 864e5)));
    this.load();
  }

  setRange(r: RangeKey) {
    this.range.set(r);
    if (r !== 'custom') this.load();
  }
  applyCustom() {
    if (this.from() && this.to()) this.load();
  }

  private load() {
    this.loading.set(true);
    const started = Date.now();
    const r = this.range();
    const query: Record<string, any> = r === 'custom' ? { range: 'custom', from: this.from(), to: this.to() } : { range: r };
    this.reports.analytics(query).subscribe({
      next: d => this.finish(() => this.data.set(d), started),
      error: () => this.finish(() => {}, started),
    });
  }

  // Keep the loader on screen for a short minimum so a fast local response still shows it.
  private finish(apply: () => void, started: number) {
    const wait = Math.max(0, 400 - (Date.now() - started));
    setTimeout(() => { apply(); this.loading.set(false); }, wait);
  }
}
