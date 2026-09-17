// ---- API envelope ----
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: string[];
}

export interface PagedResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

// ---- auth ----
export interface User {
  id: number;
  fullName: string;
  email: string;
  username: string;
  role: 'Admin' | 'Manager' | 'Cashier' | string;
  isActive: boolean;
  permissions?: string[];
}

export interface RolePermItem { code: string; module: string; description: string; }
export interface RolePerms { role: string; permissions: RolePermItem[]; }
export interface AuthResponse { token: string; expiresAt: string; user: User; }

// ---- catalog ----
export interface Category {
  id: number; name: string; icon?: string; imageUrl?: string;
  sortOrder: number; isActive: boolean; fashionItemCount: number;
}
export interface SubCategory {
  id: string; name: string; categoryId: string; categoryName: string; isActive: boolean; productCount: number;
}
export interface RecipeItem { ingredientId: number; ingredientName: string; unit: string; quantity: number; }
export interface FashionVariant { id: number; name: string; price: number; recipeMultiplier: number; color?: string; size?: string; mrp?: number; purchase?: number; stock?: number; }
export interface FashionItem {
  id: number; name: string; sku: string; description?: string; imageUrl?: string;
  categoryId: number; categoryName: string; subCategoryId?: string; subCategoryName?: string; brandName?: string; hsnCode?: string; minStock: number;
  sellingPrice: number; costPrice: number; mrp: number; stock: number; packagingCost: number; otherCost: number; taxPercent: number;
  isVeg: boolean; preparationTimeMinutes: number; isAvailable: boolean;
  ingredientCost: number; totalCost: number; grossProfit: number; profitMargin: number;
  recipe: RecipeItem[];
  variants: FashionVariant[];
}

// ---- inventory ----
export type StockStatus = 'Available' | 'Low Stock' | 'Out of Stock';
export interface Ingredient {
  id: number; name: string; sku: string; unit: string;
  currentStock: number; minimumStock: number; costPerUnit: number;
  stockValue: number; status: StockStatus; updatedAt: string;
  productId?: string; imageUrl?: string; variantCount?: number;
}
export interface InventoryTransaction {
  id: number; date: string; ingredientName: string; unit: string; type: string;
  quantity: number; previousStock: number; newStock: number; reference?: string; user?: string;
}
export interface Supplier { id: number; name: string; contactPerson?: string; mobileNumber?: string; address?: string; }

// ---- orders ----
export type OrderType = 'DineIn' | 'Takeaway' | 'Parcel';
export type OrderStatus = 'Pending' | 'Preparing' | 'Ready' | 'Completed' | 'Cancelled';
export type PaymentMethod = 'Cash' | 'Upi' | 'Card' | 'Other';
export type PaymentStatus = 'Pending' | 'Paid' | 'Refunded';

export interface OrderItem {
  id: number; fashionItemId: number; fashionName: string; variantName?: string;
  unitPrice: number; quantity: number; lineTotal: number; mrp?: number;
}
export interface Payment { method: string; status: string; paidAmount: number; transactionReference?: string; }
export interface Order {
  id: number; orderNumber: string; orderDate: string;
  customerId?: number; customerName?: string; customerMobile?: string;
  orderType: string; tableNumber?: string; status: OrderStatus;
  subtotal: number; discountAmount: number; taxAmount: number; grandTotal: number;
  inventoryDeducted: boolean; createdBy?: string; payment?: Payment; items: OrderItem[];
}
export interface OrderListItem {
  id: number; orderNumber: string; orderDate: string; customerName?: string;
  itemCount: number; grandTotal: number; paymentMethod?: string; orderType: string; status: OrderStatus;
}
export interface Receipt {
  businessName: string; address?: string; mobileNumber?: string; gstNumber?: string;
  orderNumber: string; orderDate: string; orderType: string; tableNumber?: string; customerName?: string;
  items: OrderItem[]; subtotal: number; discountAmount: number; taxAmount: number; grandTotal: number;
  mrpTotal?: number; productDiscount?: number;
  paymentMethod: string; currencySymbol: string; footer?: string;
}

// ---- customers ----
export interface Customer {
  id: number; name: string; mobileNumber?: string; email?: string;
  totalOrders: number; totalSpent: number; lastOrderDate?: string;
}

// ---- dashboard & reports ----
export interface KpiCard { todaysSales: number; salesChangePercent: number; todaysOrders: number; averageOrderValue: number; lowStockItems: number; }
export interface SalesPoint { label: string; sales: number; orders: number; }
export interface StatusBreakdown { status: string; count: number; }
export interface TopFashion { name: string; quantitySold: number; revenue: number; profit: number; profitMargin: number; }
export interface TopStat { key: 'menus' | 'orders' | 'customers' | 'income' | string; value: number; changePercent: number; spark: number[]; }
export interface Dashboard {
  kpis: KpiCard; salesOverview: SalesPoint[]; ordersByStatus: StatusBreakdown[];
  topSelling: TopFashion[]; recentOrders: OrderListItem[];
  topStats: TopStat[];
  orderRateWeekly: SalesPoint[]; orderRateMonthly: SalesPoint[]; orderRateYearly: SalesPoint[];
  paymentMix: PaymentBreakdown[];
}
export interface PaymentBreakdown { method: string; amount: number; count: number; }
export interface AnalyticsData { kpis: KpiCard; salesOverview: SalesPoint[]; topSelling: TopFashion[]; rangeLabel: string; }
export interface SalesReport {
  totalSales: number; totalOrders: number; averageOrderValue: number; totalDiscount: number;
  paymentBreakdown: PaymentBreakdown[]; series: SalesPoint[];
}
export interface IngredientUsage { name: string; unit: string; quantityUsed: number; }
export interface InventoryReport {
  totalInventoryValue: number; lowStockCount: number; outOfStockCount: number;
  totalWastageValue: number; totalPurchaseValue: number; topUsedIngredients: IngredientUsage[];
}

// ---- settings ----
export interface Setting {
  businessName: string; logoUrl?: string; address?: string; mobileNumber?: string;
  gstNumber?: string; fssaiNumber?: string; receiptFooter?: string;
  defaultTaxPercent: number; defaultOrderType: string; currencySymbol: string;
  lowStockThreshold: number; deductionTrigger: string; allowNegativeStock: boolean;
  nextBillingNumber?: string;
}
