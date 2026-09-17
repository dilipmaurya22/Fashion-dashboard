import {
  ReceiptDialogComponent
} from "./chunk-YNXBFU5S.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-MJGOFFBX.js";
import {
  ToastService
} from "./chunk-3FQWZ3YU.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  CatalogService,
  OrderService
} from "./chunk-WPCBNKZQ.js";
import {
  EmptyStateComponent,
  LoadingComponent,
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import {
  Router
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  IconComponent,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G5ETVSKB.js";

// src/app/features/pos/pos.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.food.id;
var _c0 = () => ["DineIn", "Takeaway", "Parcel"];
var _c1 = () => ["Cash", "Upi", "Card", "Other"];
function PosComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function PosComponent_For_10_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(c_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory() === c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.name);
  }
}
function PosComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function PosComponent_Conditional_12_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", f_r5.imageUrl, \u0275\u0275sanitizeUrl)("alt", f_r5.name);
  }
}
function PosComponent_Conditional_12_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275element(1, "app-icon", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 26);
  }
}
function PosComponent_Conditional_12_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.qtyOf(f_r5.id));
  }
}
function PosComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function PosComponent_Conditional_12_For_2_Template_div_click_0_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.add(f_r5));
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275template(2, PosComponent_Conditional_12_For_2_Conditional_2_Template, 1, 2, "img", 26)(3, PosComponent_Conditional_12_For_2_Conditional_3_Template, 2, 1, "span", 27);
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275element(5, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PosComponent_Conditional_12_For_2_Conditional_6_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32)(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 34);
    \u0275\u0275element(14, "app-icon", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(f_r5.imageUrl ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("veg", f_r5.isVeg)("nonveg", !f_r5.isVeg);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.qtyOf(f_r5.id) > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", f_r5.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(12, 10, f_r5.sellingPrice, "\u20B9", 0));
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
  }
}
function PosComponent_Conditional_12_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 23);
  }
}
function PosComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, PosComponent_Conditional_12_For_2_Template, 15, 14, "div", 22, _forTrack0, false, PosComponent_Conditional_12_ForEmpty_3_Template, 1, 0, "app-empty-state", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredFoods());
  }
}
function PosComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function PosComponent_For_21_Template_button_click_0_listener() {
      const t_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.orderType.set(t_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.orderType() === t_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r7 === "DineIn" ? "Dine-in" : t_r7, " ");
  }
}
function PosComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "button", 42);
    \u0275\u0275listener("click", function PosComponent_For_24_Template_button_click_8_listener() {
      const l_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeQty(l_r9.food.id, -1));
    });
    \u0275\u0275element(9, "app-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function PosComponent_For_24_Template_button_click_12_listener() {
      const l_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeQty(l_r9.food.id, 1));
    });
    \u0275\u0275element(13, "app-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 44);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r9.food.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 6, l_r9.food.sellingPrice, "\u20B9", 0));
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.qty);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(16, 10, l_r9.food.sellingPrice * l_r9.qty, "\u20B9", 0));
  }
}
function PosComponent_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "app-icon", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Tap items to add them to the order");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 30);
  }
}
function PosComponent_Conditional_26_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function PosComponent_Conditional_26_For_31_Template_button_click_0_listener() {
      const m_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.paymentMethod.set(m_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.paymentMethod() === m_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r12 === "Upi" ? "UPI" : m_r12, " ");
  }
}
function PosComponent_Conditional_26_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 59);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function PosComponent_Conditional_26_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "money");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Place Order \u2022 ", \u0275\u0275pipeBind1(1, 1, ctx_r2.grandTotal()), " ");
  }
}
function PosComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "input", 48);
    \u0275\u0275listener("ngModelChange", function PosComponent_Conditional_26_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.customerName.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 49);
    \u0275\u0275listener("ngModelChange", function PosComponent_Conditional_26_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.customerMobile.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 50)(4, "div", 51)(5, "span");
    \u0275\u0275text(6, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 51)(11, "span");
    \u0275\u0275text(12, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 52);
    \u0275\u0275listener("ngModelChange", function PosComponent_Conditional_26_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.discount.set(+$event || 0));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 51)(15, "span");
    \u0275\u0275text(16, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 53)(21, "span");
    \u0275\u0275text(22, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 54)(27, "span", 55);
    \u0275\u0275text(28, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 56);
    \u0275\u0275repeaterCreate(30, PosComponent_Conditional_26_For_31_Template, 2, 3, "button", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 58);
    \u0275\u0275listener("click", function PosComponent_Conditional_26_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.placeOrder());
    });
    \u0275\u0275template(33, PosComponent_Conditional_26_Conditional_33_Template, 1, 1, "app-spinner", 59)(34, PosComponent_Conditional_26_Conditional_34_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.customerName());
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.customerMobile());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, ctx_r2.subtotal()));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.discount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, ctx_r2.tax()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 12, ctx_r2.grandTotal()));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(14, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.placing());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.placing() ? 33 : 34);
  }
}
function PosComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function PosComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileCartOpen.set(true));
    });
    \u0275\u0275element(1, "app-icon", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("View Cart (", ctx_r2.cartCount(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx_r2.grandTotal()));
  }
}
function PosComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-receipt-dialog", 63);
    \u0275\u0275listener("closed", function PosComponent_Conditional_28_Template_app_receipt_dialog_closed_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onReceiptClosed($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("orderId", ctx)("showComplete", true);
  }
}
var PosComponent = class _PosComponent {
  catalog = inject(CatalogService);
  orders = inject(OrderService);
  toast = inject(ToastService);
  router = inject(Router);
  loading = signal(true);
  placing = signal(false);
  categories = signal([]);
  foods = signal([]);
  activeCategory = signal(null);
  search = signal("");
  cart = signal([]);
  orderType = signal("Takeaway");
  paymentMethod = signal("Cash");
  discount = signal(0);
  customerName = signal("");
  customerMobile = signal("");
  mobileCartOpen = signal(false);
  receiptOrderId = signal(null);
  filteredFoods = computed(() => {
    const s = this.search().trim().toLowerCase();
    return this.foods().filter((f) => (this.activeCategory() === null || f.categoryId === this.activeCategory()) && (!s || f.name.toLowerCase().includes(s)));
  });
  subtotal = computed(() => this.cart().reduce((sum, l) => sum + l.food.sellingPrice * l.qty, 0));
  tax = computed(() => this.cart().reduce((sum, l) => sum + l.food.sellingPrice * l.qty * l.food.taxPercent / 100, 0));
  grandTotal = computed(() => Math.max(0, this.subtotal() + this.tax() - this.discount()));
  cartCount = computed(() => this.cart().reduce((n, l) => n + l.qty, 0));
  constructor() {
    this.catalog.categories(true).subscribe((c) => this.categories.set(c));
    this.catalog.posItems().subscribe({
      next: (f) => {
        this.foods.set(f);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  selectCategory(id) {
    this.activeCategory.set(id);
  }
  add(food) {
    this.cart.update((lines) => {
      const existing = lines.find((l) => l.food.id === food.id);
      if (existing)
        return lines.map((l) => l.food.id === food.id ? __spreadProps(__spreadValues({}, l), { qty: l.qty + 1 }) : l);
      return [...lines, { food, qty: 1 }];
    });
  }
  changeQty(id, delta) {
    this.cart.update((lines) => lines.map((l) => l.food.id === id ? __spreadProps(__spreadValues({}, l), { qty: l.qty + delta }) : l).filter((l) => l.qty > 0));
  }
  qtyOf(id) {
    return this.cart().find((l) => l.food.id === id)?.qty ?? 0;
  }
  clearCart() {
    this.cart.set([]);
    this.discount.set(0);
  }
  placeOrder() {
    if (!this.cart().length) {
      this.toast.error("Add at least one item.");
      return;
    }
    this.placing.set(true);
    const body = {
      customerName: this.customerName() || null,
      customerMobile: this.customerMobile() || null,
      orderType: this.orderType(),
      discountAmount: this.discount(),
      paymentMethod: this.paymentMethod(),
      paymentStatus: "Paid",
      transactionReference: null,
      items: this.cart().map((l) => ({ foodItemId: l.food.id, quantity: l.qty }))
    };
    this.orders.create(body).subscribe({
      next: (o) => {
        this.placing.set(false);
        this.toast.success(`Order ${o.orderNumber} placed!`);
        this.receiptOrderId.set(o.id);
        this.clearCart();
        this.customerName.set("");
        this.customerMobile.set("");
        this.mobileCartOpen.set(false);
      },
      error: () => this.placing.set(false)
    });
  }
  onReceiptClosed(completed) {
    this.receiptOrderId.set(null);
  }
  vegDot(f) {
    return f.isVeg ? "veg" : "nonveg";
  }
  static \u0275fac = function PosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosComponent, selectors: [["app-pos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 12, consts: [[1, "pos"], [1, "menu"], [1, "menu-top"], [1, "search-box"], ["name", "search", 3, "size"], ["type", "text", "placeholder", "Search food\u2026", 3, "ngModelChange", "ngModel"], [1, "cats"], [1, "cat", 3, "click"], [1, "cat", 3, "active"], [1, "food-grid"], [1, "cart"], [1, "cart-head"], [1, "section-title"], [1, "btn-ghost", "icon-only", 3, "click"], ["name", "close"], [1, "order-type"], [1, "ot", 3, "active"], [1, "cart-items"], [1, "ci"], [1, "cart-empty"], [1, "mobile-cart-btn"], [3, "orderId", "showComplete"], [1, "food-card"], ["icon", "food", "title", "No items found", "message", "Try another category or search."], [1, "food-card", 3, "click"], [1, "thumb"], [3, "src", "alt"], [1, "ph"], [1, "veg-badge"], [1, "d"], [1, "qty-pill"], [1, "f-name", "truncate", 3, "title"], [1, "f-foot"], [1, "f-price"], [1, "add-btn"], ["name", "plus", 3, "size"], ["name", "food", 3, "size"], [1, "ot", 3, "click"], [1, "ci-main"], [1, "ci-name", "truncate"], [1, "ci-unit", "text-secondary"], [1, "qty"], [3, "click"], ["name", "minus", 3, "size"], [1, "ci-total"], ["name", "cart", 3, "size"], [1, "text-secondary"], [1, "customer"], ["placeholder", "Customer name (optional)", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Mobile (optional)", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "totals"], [1, "tr"], ["type", "number", "min", "0", 1, "disc", 3, "ngModelChange", "ngModel"], [1, "tr", "grand"], [1, "pay"], [1, "pay-label"], [1, "pay-methods"], [1, "pm", 3, "active"], [1, "btn", "btn-primary", "btn-lg", "place", 3, "click", "disabled"], [3, "size"], [1, "pm", 3, "click"], [1, "mobile-cart-btn", 3, "click"], [1, "mc-total"], [3, "closed", "orderId", "showComplete"]], template: function PosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "app-icon", 4);
      \u0275\u0275elementStart(5, "input", 5);
      \u0275\u0275listener("ngModelChange", function PosComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.search.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function PosComponent_Template_button_click_7_listener() {
        return ctx.selectCategory(null);
      });
      \u0275\u0275text(8, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(9, PosComponent_For_10_Template, 2, 3, "button", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, PosComponent_Conditional_11_Template, 1, 0, "app-loading")(12, PosComponent_Conditional_12_Template, 4, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "aside", 10)(14, "div", 11)(15, "h3", 12);
      \u0275\u0275text(16, "Current Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 13);
      \u0275\u0275listener("click", function PosComponent_Template_button_click_17_listener() {
        return ctx.mobileCartOpen.set(false);
      });
      \u0275\u0275element(18, "app-icon", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15);
      \u0275\u0275repeaterCreate(20, PosComponent_For_21_Template, 2, 3, "button", 16, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 17);
      \u0275\u0275repeaterCreate(23, PosComponent_For_24_Template, 17, 14, "div", 18, _forTrack1, false, PosComponent_ForEmpty_25_Template, 4, 1, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, PosComponent_Conditional_26_Template, 35, 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, PosComponent_Conditional_27_Template, 7, 5, "button", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, PosComponent_Conditional_28_Template, 1, 2, "app-receipt-dialog", 21);
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeCategory() === null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 11 : 12);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.mobileCartOpen());
      \u0275\u0275advance(7);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.cart());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.cart().length ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cartCount() > 0 && !ctx.mobileCartOpen() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.receiptOrderId()) ? 28 : -1, tmp_10_0);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    MinValidator,
    NgModel,
    IconComponent,
    MoneyPipe,
    LoadingComponent,
    EmptyStateComponent,
    SpinnerComponent,
    ReceiptDialogComponent
  ], styles: ["\n\n.pos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n  height: calc(100vh - var(--header-h) - 48px);\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.menu-top[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 10px 14px;\n  color: var(--text-secondary);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  color: var(--text);\n  font-size: 14px;\n}\n.cats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 12px;\n  margin-bottom: 4px;\n}\n.cat[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1px solid var(--border);\n  background: var(--card);\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n  transition: all 0.15s;\n}\n.cat.active[_ngcontent-%COMP%] {\n  background: var(--charcoal);\n  color: #fff;\n  border-color: var(--charcoal);\n}\n.food-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 14px;\n  overflow-y: auto;\n  padding: 4px 4px 20px;\n  align-content: start;\n}\n.food-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  padding: 10px;\n  cursor: pointer;\n  transition:\n    transform 0.12s,\n    box-shadow 0.12s,\n    border-color 0.12s;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.food-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n  border-color: var(--orange);\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 10px;\n  overflow: hidden;\n  background: var(--hover);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb[_ngcontent-%COMP%]   .ph[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n}\n.veg-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  background: #fff;\n  border: 1.5px solid var(--success);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.veg-badge[_ngcontent-%COMP%]   .d[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--success);\n}\n.veg-badge.nonveg[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n}\n.veg-badge.nonveg[_ngcontent-%COMP%]   .d[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.qty-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 11px;\n  background: var(--orange);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.f-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.f-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.f-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n}\n.add-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--orange-soft);\n  color: var(--orange-dark);\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.food-card[_ngcontent-%COMP%]:hover   .add-btn[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n}\n.cart[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.cart-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border-bottom: 1px solid var(--border);\n}\n.icon-only[_ngcontent-%COMP%] {\n  display: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n}\n.order-type[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding: 12px 18px;\n}\n.ot[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg);\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n}\n.ot.active[_ngcontent-%COMP%] {\n  background: var(--orange-soft);\n  color: var(--orange-dark);\n  border-color: var(--orange);\n}\n.cart-items[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 4px 18px;\n  min-height: 60px;\n}\n.ci[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.ci-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.ci-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.ci-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg);\n  border-radius: 8px;\n  padding: 4px;\n}\n.qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  border: none;\n  background: var(--card);\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n}\n.qty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 16px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.ci-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  min-width: 48px;\n  text-align: right;\n}\n.cart-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--text-secondary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.customer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 1px solid var(--border);\n}\n.totals[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n}\n.tr[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-secondary);\n}\n.tr.grand[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  padding-top: 8px;\n  border-top: 1px dashed var(--border);\n}\n.tr.grand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text);\n}\n.disc[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: right;\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--card);\n  color: var(--text);\n}\n.pay[_ngcontent-%COMP%] {\n  padding: 8px 18px 14px;\n}\n.pay-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.pay-methods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 6px;\n  margin-top: 8px;\n}\n.pm[_ngcontent-%COMP%] {\n  padding: 10px 4px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg);\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--text);\n}\n.pm.active[_ngcontent-%COMP%] {\n  background: var(--charcoal);\n  color: #fff;\n  border-color: var(--charcoal);\n}\n.place[_ngcontent-%COMP%] {\n  margin: 0 18px 18px;\n}\n.mobile-cart-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .pos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n  .food-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .cart[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0;\n    z-index: 500;\n    border-radius: 0;\n    transform: translateY(100%);\n    transition: transform 0.25s;\n  }\n  .cart.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .icon-only[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-cart-btn[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    position: fixed;\n    left: 16px;\n    right: 16px;\n    bottom: 16px;\n    z-index: 400;\n    background: var(--orange);\n    color: #fff;\n    border: none;\n    border-radius: 12px;\n    padding: 16px 20px;\n    font-weight: 700;\n    font-size: 15px;\n    box-shadow: var(--shadow-lg);\n  }\n  .mobile-cart-btn[_ngcontent-%COMP%]   .mc-total[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n}\n/*# sourceMappingURL=pos.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosComponent, { className: "PosComponent", filePath: "src\\app\\features\\pos\\pos.component.ts", lineNumber: 23 });
})();
export {
  PosComponent
};
//# sourceMappingURL=chunk-YK7UGGE5.js.map
