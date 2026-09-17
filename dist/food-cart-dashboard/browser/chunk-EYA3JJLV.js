import {
  OrderStatusBadge
} from "./chunk-LKDZDIXN.js";
import {
  ReceiptDialogComponent
} from "./chunk-YNXBFU5S.js";
import {
  PaginatorComponent
} from "./chunk-HNFA2KHA.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-MJGOFFBX.js";
import "./chunk-3FQWZ3YU.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  OrderService
} from "./chunk-WPCBNKZQ.js";
import {
  EmptyStateComponent,
  LoadingComponent
} from "./chunk-ZBQMMIGL.js";
import {
  RouterLink
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  DatePipe,
  IconComponent,
  Subject,
  debounceTime,
  distinctUntilChanged,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/features/orders/orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrdersComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function OrdersComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("value", t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function OrdersComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275property("value", m_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3);
  }
}
function OrdersComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function OrdersComponent_Conditional_32_Conditional_0_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 20)(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 21);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275element(21, "app-order-status", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 23)(23, "a", 24);
    \u0275\u0275element(24, "app-icon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 26);
    \u0275\u0275listener("click", function OrdersComponent_Conditional_32_Conditional_0_For_23_Template_button_click_25_listener() {
      const o_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r6.receiptId.set(o_r6.id));
    });
    \u0275\u0275element(26, "app-icon", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, o_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r6.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 12, o_r6.orderDate, "dd MMM, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r6.customerName || "Walk-in");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r6.itemCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, o_r6.grandTotal));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r6.paymentMethod || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r6.orderType);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", o_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, o_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function OrdersComponent_Conditional_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 17)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date / Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, OrdersComponent_Conditional_32_Conditional_0_For_23_Template, 27, 21, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "app-paginator", 18);
    \u0275\u0275listener("pageChange", function OrdersComponent_Conditional_32_Conditional_0_Template_app_paginator_pageChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.goPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(r_r8.items);
    \u0275\u0275advance(2);
    \u0275\u0275property("page", r_r8.page)("pageSize", r_r8.pageSize)("totalCount", r_r8.totalCount)("totalPages", r_r8.totalPages);
  }
}
function OrdersComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 15);
  }
}
function OrdersComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrdersComponent_Conditional_32_Conditional_0_Template, 25, 4)(1, OrdersComponent_Conditional_32_Conditional_1_Template, 1, 0, "app-empty-state", 15);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.items.length ? 0 : 1);
  }
}
function OrdersComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-receipt-dialog", 28);
    \u0275\u0275listener("closed", function OrdersComponent_Conditional_33_Template_app_receipt_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.receiptId.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("orderId", ctx);
  }
}
var OrdersComponent = class _OrdersComponent {
  orderSvc = inject(OrderService);
  loading = signal(true);
  result = signal(null);
  page = signal(1);
  search = signal("");
  status = signal("");
  orderType = signal("");
  paymentMethod = signal("");
  receiptId = signal(null);
  searchSubject = new Subject();
  statuses = ["Pending", "Preparing", "Ready", "Completed", "Cancelled"];
  types = ["DineIn", "Takeaway", "Parcel"];
  methods = ["Cash", "Upi", "Card", "Other"];
  constructor() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((v) => {
      this.search.set(v);
      this.page.set(1);
      this.load();
    });
    this.load();
  }
  onSearch(v) {
    this.searchSubject.next(v);
  }
  changeFilter() {
    this.page.set(1);
    this.load();
  }
  goPage(p) {
    this.page.set(p);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.orderSvc.orders({
      page: this.page(),
      pageSize: 15,
      search: this.search(),
      status: this.status(),
      orderType: this.orderType(),
      paymentMethod: this.paymentMethod()
    }).subscribe({
      next: (r) => {
        this.result.set(r);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  clearFilters() {
    this.status.set("");
    this.orderType.set("");
    this.paymentMethod.set("");
    this.search.set("");
    this.page.set(1);
    this.load();
  }
  static \u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 8, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], ["routerLink", "/pos", 1, "btn", "btn-primary"], ["name", "plus", 3, "size"], [1, "card"], [1, "filters"], [1, "search-box"], ["name", "search", 3, "size"], ["type", "text", "placeholder", "Search order # or customer\u2026", 3, "input"], [1, "form-control", "filt", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [3, "orderId"], ["icon", "orders", "title", "No orders found", "message", "Try adjusting your filters."], [1, "table-wrap"], [1, "data"], [3, "pageChange", "page", "pageSize", "totalCount", "totalPages"], [1, "onum", 3, "routerLink"], [1, "mono"], [1, "badge", "badge-neutral"], [3, "status"], [1, "row-actions"], ["title", "View", 1, "ib", 3, "routerLink"], ["name", "eye", 3, "size"], ["title", "Receipt", 1, "ib", 3, "click"], ["name", "print", 3, "size"], [3, "closed", "orderId"]], template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Track and manage all customer orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "a", 3);
      \u0275\u0275element(7, "app-icon", 4);
      \u0275\u0275text(8, " New Order");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "app-icon", 8);
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275listener("input", function OrdersComponent_Template_input_input_13_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "select", 10);
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_14_listener($event) {
        ctx.status.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(15, "option", 11);
      \u0275\u0275text(16, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(17, OrdersComponent_For_18_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 10);
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_19_listener($event) {
        ctx.orderType.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(22, OrdersComponent_For_23_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "select", 10);
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_24_listener($event) {
        ctx.paymentMethod.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(25, "option", 11);
      \u0275\u0275text(26, "All Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(27, OrdersComponent_For_28_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 13);
      \u0275\u0275listener("click", function OrdersComponent_Template_button_click_29_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(30, "Clear");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, OrdersComponent_Conditional_31_Template, 1, 0, "app-loading")(32, OrdersComponent_Conditional_32_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, OrdersComponent_Conditional_33_Template, 1, 1, "app-receipt-dialog", 14);
    }
    if (rf & 2) {
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.orderType());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.types);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.paymentMethod());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.methods);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.result()) ? 32 : -1, tmp_9_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.receiptId()) ? 33 : -1, tmp_10_0);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    RouterLink,
    IconComponent,
    MoneyPipe,
    OrderStatusBadge,
    LoadingComponent,
    EmptyStateComponent,
    PaginatorComponent,
    ReceiptDialogComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\features\\orders\\orders.component.ts", lineNumber: 23 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-EYA3JJLV.js.map
