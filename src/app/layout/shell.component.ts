import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { IconComponent } from '../shared/icon/icon.component';
import { ServerDownComponent } from '../shared/ui/server-down';
import { GlobalSearchComponent } from './global-search.component';
import { AuthService } from '../core/services/auth.service';
import { ThemeService } from '../core/services/theme.service';
import { ConnectivityService } from '../core/services/connectivity.service';
import { OrderService } from '../core/services/domain.services';

interface NavChild { label: string; route: string; perm?: string; }
interface NavItem {
  label: string; icon: string; route?: string; perm?: string;
  badge?: 'pending'; dot?: boolean; children?: NavChild[]; exact?: boolean;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, IconComponent, ServerDownComponent, GlobalSearchComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  connectivity = inject(ConnectivityService);
  private router = inject(Router);
  private orders = inject(OrderService);

  sidebarOpen = signal(false);
  now = signal(new Date());
  pendingCount = signal(0);
  expanded = signal<Set<string>>(new Set());

  // Exactly the 9 requested sections; sub-pages live inside submenus so nothing is lost.
  private items: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Analytics', icon: 'reports', route: '/analytics', perm: 'reports.view' },
    { label: 'Inventory', icon: 'inventory', children: [
      { label: 'Product List', route: '/inventory', perm: 'products.view' },
      { label: 'Categories', route: '/categories', perm: 'products.create' },
      { label: 'Stock In', route: '/inventory/stock-in', perm: 'inventory.adjust' },
      { label: 'Transactions', route: '/inventory/transactions', perm: 'inventory.view' },
      { label: 'Low Stock', route: '/inventory/low-stock', perm: 'inventory.view' },
    ]},
    { label: 'Customers', icon: 'customers', route: '/customers', perm: 'customers.view' },
    { label: 'Billing', icon: 'orders', badge: 'pending', children: [
      { label: 'New Billing', route: '/pos', perm: 'pos.use' },
      { label: 'All Billing', route: '/orders', perm: 'sales.view' },
    ]},
    { label: 'Employee', icon: 'users', route: '/settings/users', perm: 'users.manage' },
    { label: 'Settings', icon: 'settings', children: [
      { label: 'Business Settings', route: '/settings', perm: 'settings.manage' },
      { label: 'Printer Settings', route: '/settings/printer', perm: 'settings.manage' },
    ]},
  ];

  visibleItems = computed<NavItem[]>(() => {
    // depend on the current user so the menu re-filters on login/logout
    this.auth.user();
    const can = (perm?: string) => !perm || this.auth.hasPermission(perm);
    return this.items
      .map(it => it.children
        ? { ...it, children: it.children.filter(c => can(c.perm)) }
        : it)
      .filter(it => it.children ? it.children.length > 0 : can(it.perm));
  });

  constructor() {
    setInterval(() => this.now.set(new Date()), 30000);
    this.refreshPending();
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.sidebarOpen.set(false);
      this.refreshPending();
      this.autoExpand();
    });
    this.autoExpand();
  }

  private refreshPending() {
    // only users who can see sales should query the pending-orders badge
    if (!this.auth.hasPermission('sales.view')) { this.pendingCount.set(0); return; }
    this.orders.orders({ page: 1, pageSize: 1, status: 'Pending' })
      .subscribe({ next: r => this.pendingCount.set(r.totalCount), error: () => {} });
  }

  /** Best (longest-prefix) route match, so e.g. /settings/users maps to Employee, not Settings. */
  private activeMatch(): { item: NavItem; child?: NavChild } | null {
    const url = this.router.url.split('?')[0];
    const routes: { route: string; item: NavItem; child?: NavChild }[] = [];
    for (const it of this.items) {
      if (it.route) routes.push({ route: it.route, item: it });
      it.children?.forEach(c => routes.push({ route: c.route, item: it, child: c }));
    }
    let best: { route: string; item: NavItem; child?: NavChild } | null = null;
    for (const r of routes) {
      if ((url === r.route || url.startsWith(r.route + '/')) && (!best || r.route.length > best.route.length)) best = r;
    }
    return best ? { item: best.item, child: best.child } : null;
  }

  /** Open the submenu that contains the current route. */
  private autoExpand() {
    const m = this.activeMatch();
    this.expanded.set(m?.item.children ? new Set([m.item.label]) : new Set());
  }

  toggle(label: string) {
    // accordion: opening one submenu closes the others
    this.expanded.update(s => (s.has(label) ? new Set<string>() : new Set<string>([label])));
  }
  isExpanded(label: string) { return this.expanded().has(label); }
  isParentActive(it: NavItem): boolean {
    const m = this.activeMatch();
    return !!m && !!m.item.children && m.item.label === it.label;
  }

  toggleSidebar() { this.sidebarOpen.update(v => !v); }
  logout() { this.auth.logout(); }

  pageName(): string {
    const m = this.activeMatch();
    return m?.child?.label ?? m?.item.label ?? 'Dashboard';
  }

  greeting(): string {
    const h = this.now().getHours();
    return h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
  }
  initials(): string {
    const n = this.auth.user()?.fullName || 'U';
    return n.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }
}
