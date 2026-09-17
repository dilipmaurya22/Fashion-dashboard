import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  Category, SubCategory, FashionItem, Ingredient, InventoryTransaction, Supplier,
  Order, OrderListItem, Receipt, Customer, PagedResult,
  Dashboard, AnalyticsData, SalesReport, InventoryReport, TopFashion, Setting, User, RolePerms,
} from '../models/models';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private api = inject(ApiService);

  categories(activeOnly = false): Observable<Category[]> { return this.api.get('/categories', { activeOnly }); }
  category(id: number): Observable<Category> { return this.api.get(`/categories/${id}`); }
  saveCategory(id: number | null, body: any): Observable<Category> {
    return id ? this.api.put(`/categories/${id}`, body) : this.api.post('/categories', body);
  }
  deleteCategory(id: number): Observable<any> { return this.api.delete(`/categories/${id}`); }

  subCategories(categoryId?: string): Observable<SubCategory[]> { return this.api.get('/subcategories', categoryId ? { categoryId } : {}); }
  saveSubCategory(id: string | null, body: any): Observable<SubCategory> {
    return id ? this.api.put(`/subcategories/${id}`, body) : this.api.post('/subcategories', body);
  }
  deleteSubCategory(id: string): Observable<any> { return this.api.delete(`/subcategories/${id}`); }

  fashionItems(query: Record<string, any>): Observable<PagedResult<FashionItem>> { return this.api.get('/fashion-items', query); }
  posItems(categoryId?: number): Observable<FashionItem[]> { return this.api.get('/fashion-items/pos', { categoryId }); }
  fashionItem(id: number): Observable<FashionItem> { return this.api.get(`/fashion-items/${id}`); }
  saveFashionItem(id: number | null, body: any): Observable<FashionItem> {
    return id ? this.api.put(`/fashion-items/${id}`, body) : this.api.post('/fashion-items', body);
  }
  deleteFashionItem(id: number): Observable<any> { return this.api.delete(`/fashion-items/${id}`); }
}

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private api = inject(ApiService);

  ingredients(query: Record<string, any>): Observable<PagedResult<Ingredient>> { return this.api.get('/ingredients', query); }
  allIngredients(): Observable<Ingredient[]> { return this.api.get('/ingredients/all'); }
  lowStock(): Observable<Ingredient[]> { return this.api.get('/ingredients/low-stock'); }
  ingredient(id: number): Observable<Ingredient> { return this.api.get(`/ingredients/${id}`); }
  saveIngredient(id: number | null, body: any): Observable<Ingredient> {
    return id ? this.api.put(`/ingredients/${id}`, body) : this.api.post('/ingredients', body);
  }
  deleteIngredient(id: number): Observable<any> { return this.api.delete(`/ingredients/${id}`); }
  variantsByProduct(productId: string): Observable<Ingredient[]> { return this.api.get(`/ingredients/by-product/${productId}`); }
  deleteProduct(productId: string): Observable<any> { return this.api.delete(`/fashion-items/${productId}`); }

  stockIn(body: any): Observable<any> { return this.api.post('/inventory/stock-in', body); }
  adjust(body: any): Observable<Ingredient> { return this.api.post('/inventory/adjustment', body); }
  transactions(query: Record<string, any>): Observable<PagedResult<InventoryTransaction>> {
    return this.api.get('/inventory/transactions', query);
  }

  suppliers(): Observable<Supplier[]> { return this.api.get('/suppliers'); }
  saveSupplier(id: number | null, body: any): Observable<Supplier> {
    return id ? this.api.put(`/suppliers/${id}`, body) : this.api.post('/suppliers', body);
  }
  deleteSupplier(id: number): Observable<any> { return this.api.delete(`/suppliers/${id}`); }
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private api = inject(ApiService);

  orders(query: Record<string, any>): Observable<PagedResult<OrderListItem>> { return this.api.get('/orders', query); }
  order(id: number): Observable<Order> { return this.api.get(`/orders/${id}`); }
  create(body: any): Observable<Order> { return this.api.post('/orders', body); }
  setStatus(id: number, status: string): Observable<Order> { return this.api.put(`/orders/${id}/status`, { status }); }
  complete(id: number): Observable<Order> { return this.api.post(`/orders/${id}/complete`); }
  cancel(id: number): Observable<Order> { return this.api.post(`/orders/${id}/cancel`); }
  receipt(id: number): Observable<Receipt> { return this.api.get(`/orders/${id}/receipt`); }
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private api = inject(ApiService);
  customers(query: Record<string, any>): Observable<PagedResult<Customer>> { return this.api.get('/customers', query); }
  customer(id: number): Observable<Customer> { return this.api.get(`/customers/${id}`); }
  customerOrders(id: number): Observable<OrderListItem[]> { return this.api.get(`/customers/${id}/orders`); }
  save(id: number | null, body: any): Observable<Customer> {
    return id ? this.api.put(`/customers/${id}`, body) : this.api.post('/customers', body);
  }
  delete(id: number): Observable<any> { return this.api.delete(`/customers/${id}`); }
}

@Injectable({ providedIn: 'root' })
export class ReportService {
  private api = inject(ApiService);
  dashboard(): Observable<Dashboard> { return this.api.get('/dashboard'); }
  analytics(query: Record<string, any>): Observable<AnalyticsData> { return this.api.get('/dashboard/analytics', query); }
  sales(from?: string, to?: string): Observable<SalesReport> { return this.api.get('/reports/sales', { from, to }); }
  inventory(): Observable<InventoryReport> { return this.api.get('/reports/inventory'); }
  bestSelling(from?: string, to?: string): Observable<TopFashion[]> { return this.api.get('/reports/best-selling', { from, to }); }
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private api = inject(ApiService);
  get(): Observable<Setting> { return this.api.get('/settings'); }
  update(body: Setting): Observable<Setting> { return this.api.put('/settings', body); }
  users(): Observable<User[]> { return this.api.get('/users'); }
  roles(): Observable<string[]> { return this.api.get('/users/roles'); }
  rolePermissions(): Observable<RolePerms[]> { return this.api.get('/users/roles/permissions'); }
  saveUser(id: number | null, body: any): Observable<User> {
    return id ? this.api.put(`/users/${id}`, body) : this.api.post('/users', body);
  }
  deleteUser(id: number): Observable<any> { return this.api.delete(`/users/${id}`); }
}
