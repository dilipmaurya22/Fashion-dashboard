import { Routes } from '@angular/router';
import { authGuard, roleGuard } from './core/guards/guards';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    loadComponent: () => import('./layout/shell.component').then(m => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'analytics', canActivate: [roleGuard], data: { permission: 'reports.view' }, loadComponent: () => import('./features/analytics/analytics.component').then(m => m.AnalyticsComponent) },
      { path: 'review', canActivate: [roleGuard], data: { permission: 'reports.view' }, loadComponent: () => import('./features/review/review.component').then(m => m.ReviewComponent) },
      { path: 'message', loadComponent: () => import('./features/message/message.component').then(m => m.MessageComponent) },
      { path: 'pos', canActivate: [roleGuard], data: { permission: 'pos.use' }, loadComponent: () => import('./features/pos/pos.component').then(m => m.PosComponent) },
      { path: 'orders', canActivate: [roleGuard], data: { permission: 'sales.view' }, loadComponent: () => import('./features/orders/orders.component').then(m => m.OrdersComponent) },
      { path: 'orders/:id', canActivate: [roleGuard], data: { permission: 'sales.view' }, loadComponent: () => import('./features/orders/order-detail.component').then(m => m.OrderDetailComponent) },
      { path: 'categories', canActivate: [roleGuard], data: { permission: 'products.create' }, loadComponent: () => import('./features/categories/categories.component').then(m => m.CategoriesComponent) },
      { path: 'inventory', canActivate: [roleGuard], data: { permission: 'products.view' }, loadComponent: () => import('./features/inventory/inventory.component').then(m => m.InventoryComponent) },
      { path: 'inventory/stock-in', canActivate: [roleGuard], data: { permission: 'inventory.adjust' }, loadComponent: () => import('./features/inventory/stock-in.component').then(m => m.StockInComponent) },
      { path: 'inventory/transactions', canActivate: [roleGuard], data: { permission: 'inventory.view' }, loadComponent: () => import('./features/inventory/transactions.component').then(m => m.TransactionsComponent) },
      { path: 'inventory/low-stock', canActivate: [roleGuard], data: { permission: 'inventory.view' }, loadComponent: () => import('./features/inventory/low-stock.component').then(m => m.LowStockComponent) },
      { path: 'customers', canActivate: [roleGuard], data: { permission: 'customers.view' }, loadComponent: () => import('./features/customers/customers.component').then(m => m.CustomersComponent) },
      { path: 'customers/:id', canActivate: [roleGuard], data: { permission: 'customers.view' }, loadComponent: () => import('./features/customers/customer-detail.component').then(m => m.CustomerDetailComponent) },
      { path: 'reports/sales', canActivate: [roleGuard], data: { permission: 'reports.view' }, loadComponent: () => import('./features/reports/sales-report.component').then(m => m.SalesReportComponent) },
      { path: 'reports/inventory', canActivate: [roleGuard], data: { permission: 'reports.view' }, loadComponent: () => import('./features/reports/inventory-report.component').then(m => m.InventoryReportComponent) },
      { path: 'reports/best-selling', canActivate: [roleGuard], data: { permission: 'reports.view' }, loadComponent: () => import('./features/reports/best-selling.component').then(m => m.BestSellingComponent) },
      { path: 'settings', canActivate: [roleGuard], data: { permission: 'settings.manage' }, loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) },
      { path: 'settings/printer', canActivate: [roleGuard], data: { permission: 'settings.manage' }, loadComponent: () => import('./features/settings/printer.component').then(m => m.PrinterSettingsComponent) },
      { path: 'settings/users', canActivate: [roleGuard], data: { permission: 'users.manage' }, loadComponent: () => import('./features/settings/users.component').then(m => m.UsersComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];
