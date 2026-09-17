import {
  OrderStatusBadge
} from "./chunk-LKDZDIXN.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  CustomerService
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
  forkJoin,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G5ETVSKB.js";

// src/app/features/customers/customer-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function CustomerDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function CustomerDetailComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \u2022 ", c_r1.email, " ");
  }
}
function CustomerDetailComponent_Conditional_4_Conditional_31_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 16)(10, "b");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275element(16, "app-order-status", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, o_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r2.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, o_r2.orderDate, "dd MMM, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.itemCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, o_r2.grandTotal));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.paymentMethod || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("status", o_r2.status);
  }
}
function CustomerDetailComponent_Conditional_4_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, CustomerDetailComponent_Conditional_4_Conditional_31_For_18_Template, 17, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.orders());
  }
}
function CustomerDetailComponent_Conditional_4_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 13);
  }
}
function CustomerDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h1", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275template(8, CustomerDetailComponent_Conditional_4_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "span", 8);
    \u0275\u0275text(12, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "span", 8);
    \u0275\u0275text(17, "Total Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "b");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 7)(22, "span", 8);
    \u0275\u0275text(23, "Avg Order Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "b");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 10)(29, "h3", 11);
    \u0275\u0275text(30, "Order History");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, CustomerDetailComponent_Conditional_4_Conditional_31_Template, 19, 0, "div", 12)(32, CustomerDetailComponent_Conditional_4_Conditional_32_Template, 1, 0, "app-empty-state", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r1.mobileNumber || "No mobile", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.email ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r1.totalOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 8, c_r1.totalSpent));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 10, ctx_r2.avg()));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.orders().length ? 31 : 32);
  }
}
var CustomerDetailComponent = class _CustomerDetailComponent {
  id;
  svc = inject(CustomerService);
  loading = signal(true);
  customer = signal(null);
  orders = signal([]);
  ngOnInit() {
    forkJoin({ c: this.svc.customer(+this.id), o: this.svc.customerOrders(+this.id) }).subscribe({
      next: ({ c, o }) => {
        this.customer.set(c);
        this.orders.set(o);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  avg() {
    const c = this.customer();
    return c && c.totalOrders ? c.totalSpent / c.totalOrders : 0;
  }
  static \u0275fac = function CustomerDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerDetailComponent, selectors: [["app-customer-detail"]], inputs: { id: "id" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [["routerLink", "/customers", 1, "back"], ["name", "chevronDown", 2, "transform", "rotate(90deg)", 3, "size"], [1, "profile-head"], [1, "avatar"], [1, "page-title"], [1, "text-secondary"], [1, "grid-3", "mb-24"], [1, "card", "card-pad", "stat"], [1, "text-secondary", "text-small"], [1, "card"], [1, "card-pad"], [1, "section-title"], [1, "table-wrap"], ["icon", "orders", "title", "No orders yet", "message", ""], [1, "data"], [1, "onum", 3, "routerLink"], [1, "mono"], [3, "status"]], template: function CustomerDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275element(1, "app-icon", 1);
      \u0275\u0275text(2, " Back to Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CustomerDetailComponent_Conditional_3_Template, 1, 0, "app-loading")(4, CustomerDetailComponent_Conditional_4_Template, 33, 12);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.customer()) ? 4 : -1, tmp_2_0);
    }
  }, dependencies: [CommonModule, DatePipe, RouterLink, IconComponent, MoneyPipe, OrderStatusBadge, LoadingComponent, EmptyStateComponent], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: var(--orange-dark);\n}\n.profile-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  background: var(--orange-soft);\n  color: var(--orange-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n}\n.grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n@media (max-width: 720px) {\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=customer-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerDetailComponent, { className: "CustomerDetailComponent", filePath: "src\\app\\features\\customers\\customer-detail.component.ts", lineNumber: 19 });
})();
export {
  CustomerDetailComponent
};
//# sourceMappingURL=chunk-Y2BMCXDJ.js.map
