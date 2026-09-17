import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReportService } from '../../core/services/domain.services';
import { AuthService } from '../../core/services/auth.service';
import { Dashboard, TopStat } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { CountUpDirective } from '../../shared/ui/count-up.directive';
import { OrderStatusBadge } from '../../shared/ui/badges';
import { LoadingComponent, EmptyStateComponent } from '../../shared/ui/misc';
import { SparklineComponent, ColumnChartComponent, GaugeChartComponent, GaugeSegment } from '../../shared/charts/charts';

interface StatCard { key: string; label: string; icon: string; value: string; raw: number; money: boolean; change: number; spark: number[]; color: string; }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IconComponent, MoneyPipe, CountUpDirective, OrderStatusBadge,
    LoadingComponent, EmptyStateComponent, SparklineComponent, ColumnChartComponent, GaugeChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private reports = inject(ReportService);
  private auth = inject(AuthService);

  loading = signal(true);
  data = signal<Dashboard | null>(null);
  now = new Date();

  orderRateMode = signal<'weekly' | 'monthly' | 'yearly'>('weekly');
  recentSearch = signal('');

  private currency = '₹';

  cards = computed<StatCard[]>(() => {
    const d = this.data(); if (!d) return [];
    const by = (k: string): TopStat => d.topStats.find(s => s.key === k) ?? { key: k, value: 0, changePercent: 0, spark: [] };
    const m = by('menus'), o = by('orders'), c = by('customers'), i = by('income');
    const k = d.kpis;
    return [
      { key: 'sales', label: 'Today Sales', icon: 'payment', value: this.currency + (k.todaysSales ?? 0).toLocaleString('en-IN', { maximumFractionDigits: 0 }), raw: k.todaysSales ?? 0, money: true, change: k.salesChangePercent, spark: i.spark, color: '#FF7A00' },
      { key: 'billing', label: 'Today Billing', icon: 'orders', value: '' + (k.todaysOrders ?? 0), raw: k.todaysOrders ?? 0, money: false, change: o.changePercent, spark: o.spark, color: '#16A34A' },
      { key: 'products', label: 'Total Products', icon: 'fashion', value: '' + m.value, raw: +m.value, money: false, change: m.changePercent, spark: m.spark, color: '#FF7A00' },
      { key: 'customers', label: 'Total Customers', icon: 'customers', value: (+c.value).toLocaleString('en-IN'), raw: +c.value, money: false, change: c.changePercent, spark: c.spark, color: '#008CFF' },
    ];
  });

  orderRate = computed(() => {
    const d = this.data(); if (!d) return [];
    const src = this.orderRateMode() === 'weekly' ? d.orderRateWeekly
      : this.orderRateMode() === 'yearly' ? d.orderRateYearly : d.orderRateMonthly;
    return src.map(p => ({ label: p.label, value: p.sales }));
  });

  // Payment Mix — real share of sales by payment method (last 30 days).
  private paymentColors: Record<string, string> = {
    Cash: '#16A34A', Upi: '#FF7A00', Card: '#008CFF', Other: '#FFB066',
  };
  paymentSegments = computed<GaugeSegment[]>(() => {
    const mix = (this.data()?.paymentMix ?? []).filter(m => m.amount > 0);
    const total = mix.reduce((a, m) => a + m.amount, 0) || 1;
    return mix
      .sort((a, b) => b.amount - a.amount)
      .map(m => ({
        label: m.method === 'Upi' ? 'UPI' : m.method,
        value: Math.round((m.amount / total) * 100),
        color: this.paymentColors[m.method] ?? '#94A3B8',
        hint: '₹' + m.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      }));
  });

  recentOrders = computed(() => {
    const d = this.data(); if (!d) return [];
    const s = this.recentSearch().trim().toLowerCase();
    if (!s) return d.recentOrders;
    return d.recentOrders.filter(o => (o.customerName || 'walk-in').toLowerCase().includes(s) || o.orderNumber.toLowerCase().includes(s));
  });

  constructor() {
    this.reports.dashboard().subscribe({
      next: d => { this.data.set(d); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  greeting(): string {
    const h = this.now.getHours();
    return h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
  }
  firstName(): string { return (this.auth.user()?.fullName || '').split(' ')[0]; }
}
