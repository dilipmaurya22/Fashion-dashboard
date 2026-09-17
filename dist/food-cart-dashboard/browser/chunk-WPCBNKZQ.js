import {
  ApiService,
  inject,
  ɵɵdefineInjectable
} from "./chunk-G5ETVSKB.js";

// src/app/core/services/domain.services.ts
var CatalogService = class _CatalogService {
  api = inject(ApiService);
  categories(activeOnly = false) {
    return this.api.get("/categories", { activeOnly });
  }
  category(id) {
    return this.api.get(`/categories/${id}`);
  }
  saveCategory(id, body) {
    return id ? this.api.put(`/categories/${id}`, body) : this.api.post("/categories", body);
  }
  deleteCategory(id) {
    return this.api.delete(`/categories/${id}`);
  }
  foodItems(query) {
    return this.api.get("/food-items", query);
  }
  posItems(categoryId) {
    return this.api.get("/food-items/pos", { categoryId });
  }
  foodItem(id) {
    return this.api.get(`/food-items/${id}`);
  }
  saveFoodItem(id, body) {
    return id ? this.api.put(`/food-items/${id}`, body) : this.api.post("/food-items", body);
  }
  deleteFoodItem(id) {
    return this.api.delete(`/food-items/${id}`);
  }
  static \u0275fac = function CatalogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CatalogService, factory: _CatalogService.\u0275fac, providedIn: "root" });
};
var InventoryService = class _InventoryService {
  api = inject(ApiService);
  ingredients(query) {
    return this.api.get("/ingredients", query);
  }
  allIngredients() {
    return this.api.get("/ingredients/all");
  }
  lowStock() {
    return this.api.get("/ingredients/low-stock");
  }
  ingredient(id) {
    return this.api.get(`/ingredients/${id}`);
  }
  saveIngredient(id, body) {
    return id ? this.api.put(`/ingredients/${id}`, body) : this.api.post("/ingredients", body);
  }
  deleteIngredient(id) {
    return this.api.delete(`/ingredients/${id}`);
  }
  stockIn(body) {
    return this.api.post("/inventory/stock-in", body);
  }
  adjust(body) {
    return this.api.post("/inventory/adjustment", body);
  }
  transactions(query) {
    return this.api.get("/inventory/transactions", query);
  }
  suppliers() {
    return this.api.get("/suppliers");
  }
  saveSupplier(id, body) {
    return id ? this.api.put(`/suppliers/${id}`, body) : this.api.post("/suppliers", body);
  }
  deleteSupplier(id) {
    return this.api.delete(`/suppliers/${id}`);
  }
  static \u0275fac = function InventoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventoryService, factory: _InventoryService.\u0275fac, providedIn: "root" });
};
var OrderService = class _OrderService {
  api = inject(ApiService);
  orders(query) {
    return this.api.get("/orders", query);
  }
  order(id) {
    return this.api.get(`/orders/${id}`);
  }
  create(body) {
    return this.api.post("/orders", body);
  }
  setStatus(id, status) {
    return this.api.put(`/orders/${id}/status`, { status });
  }
  complete(id) {
    return this.api.post(`/orders/${id}/complete`);
  }
  cancel(id) {
    return this.api.post(`/orders/${id}/cancel`);
  }
  receipt(id) {
    return this.api.get(`/orders/${id}/receipt`);
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
var CustomerService = class _CustomerService {
  api = inject(ApiService);
  customers(query) {
    return this.api.get("/customers", query);
  }
  customer(id) {
    return this.api.get(`/customers/${id}`);
  }
  customerOrders(id) {
    return this.api.get(`/customers/${id}/orders`);
  }
  save(id, body) {
    return id ? this.api.put(`/customers/${id}`, body) : this.api.post("/customers", body);
  }
  delete(id) {
    return this.api.delete(`/customers/${id}`);
  }
  static \u0275fac = function CustomerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerService, factory: _CustomerService.\u0275fac, providedIn: "root" });
};
var ReportService = class _ReportService {
  api = inject(ApiService);
  dashboard() {
    return this.api.get("/dashboard");
  }
  sales(from, to) {
    return this.api.get("/reports/sales", { from, to });
  }
  inventory() {
    return this.api.get("/reports/inventory");
  }
  bestSelling(from, to) {
    return this.api.get("/reports/best-selling", { from, to });
  }
  static \u0275fac = function ReportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
};
var SettingsService = class _SettingsService {
  api = inject(ApiService);
  get() {
    return this.api.get("/settings");
  }
  update(body) {
    return this.api.put("/settings", body);
  }
  users() {
    return this.api.get("/users");
  }
  roles() {
    return this.api.get("/users/roles");
  }
  saveUser(id, body) {
    return id ? this.api.put(`/users/${id}`, body) : this.api.post("/users", body);
  }
  deleteUser(id) {
    return this.api.delete(`/users/${id}`);
  }
  static \u0275fac = function SettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
};

export {
  CatalogService,
  InventoryService,
  OrderService,
  CustomerService,
  ReportService,
  SettingsService
};
//# sourceMappingURL=chunk-WPCBNKZQ.js.map
