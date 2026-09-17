import {
  OrderStatusBadge
} from "./chunk-LKDZDIXN.js";
import {
  ReceiptDialogComponent
} from "./chunk-YNXBFU5S.js";
import {
  ConfirmService
} from "./chunk-DNXBLQSG.js";
import {
  ToastService
} from "./chunk-3FQWZ3YU.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  OrderService
} from "./chunk-WPCBNKZQ.js";
import {
  LoadingComponent
} from "./chunk-ZBQMMIGL.js";
import {
  RouterLink
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  DatePipe,
  IconComponent,
  __async,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G5ETVSKB.js";

// src/app/features/orders/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function OrderDetailComponent_Conditional_4_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r3.foodName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, i_r3.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r3.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, i_r3.lineTotal));
  }
}
function OrderDetailComponent_Conditional_4_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(5, 1, o_r4.discountAmount), "");
  }
}
function OrderDetailComponent_Conditional_4_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r4.customerMobile);
  }
}
function OrderDetailComponent_Conditional_4_Conditional_87_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function OrderDetailComponent_Conditional_4_Conditional_87_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStatus("Preparing"));
    });
    \u0275\u0275text(1, "Mark Preparing");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.busy());
  }
}
function OrderDetailComponent_Conditional_4_Conditional_87_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function OrderDetailComponent_Conditional_4_Conditional_87_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStatus("Ready"));
    });
    \u0275\u0275text(1, "Mark Ready");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.busy());
  }
}
function OrderDetailComponent_Conditional_4_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 21);
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275template(4, OrderDetailComponent_Conditional_4_Conditional_87_Conditional_4_Template, 2, 1, "button", 27)(5, OrderDetailComponent_Conditional_4_Conditional_87_Conditional_5_Template, 2, 1, "button", 27);
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function OrderDetailComponent_Conditional_4_Conditional_87_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.complete());
    });
    \u0275\u0275element(7, "app-icon", 29);
    \u0275\u0275text(8, " Complete Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 30);
    \u0275\u0275listener("click", function OrderDetailComponent_Conditional_4_Conditional_87_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(10, "app-icon", 31);
    \u0275\u0275text(11, " Cancel Order");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.can("Preparing") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can("Ready") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
function OrderDetailComponent_Conditional_4_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-receipt-dialog", 33);
    \u0275\u0275listener("closed", function OrderDetailComponent_Conditional_4_Conditional_88_Template_app_receipt_dialog_closed_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.showReceipt.set(false);
      return \u0275\u0275resetView($event && ctx_r1.load());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("orderId", o_r4.id)("showComplete", o_r4.status !== "Completed" && o_r4.status !== "Cancelled");
  }
}
function OrderDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "h1", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275element(8, "app-order-status", 6);
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275listener("click", function OrderDetailComponent_Conditional_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showReceipt.set(true));
    });
    \u0275\u0275element(10, "app-icon", 8);
    \u0275\u0275text(11, " Receipt");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "h3", 12);
    \u0275\u0275text(16, "Order Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13)(18, "table", 14)(19, "thead")(20, "tr")(21, "th");
    \u0275\u0275text(22, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 15);
    \u0275\u0275text(28, "Subtotal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, OrderDetailComponent_Conditional_4_For_31_Template, 12, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 16)(33, "div", 17)(34, "span");
    \u0275\u0275text(35, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, OrderDetailComponent_Conditional_4_Conditional_39_Template, 6, 3, "div", 17);
    \u0275\u0275elementStart(40, "div", 17)(41, "span");
    \u0275\u0275text(42, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 18)(47, "span");
    \u0275\u0275text(48, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "money");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 19)(53, "div", 20)(54, "h3", 21);
    \u0275\u0275text(55, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 22)(57, "span");
    \u0275\u0275text(58, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "b");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, OrderDetailComponent_Conditional_4_Conditional_61_Template, 5, 1, "div", 22);
    \u0275\u0275elementStart(62, "div", 22)(63, "span");
    \u0275\u0275text(64, "Order Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "b");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 22)(68, "span");
    \u0275\u0275text(69, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "b");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 22)(73, "span");
    \u0275\u0275text(74, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 23);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 22)(78, "span");
    \u0275\u0275text(79, "Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 23);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 22)(83, "span");
    \u0275\u0275text(84, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "b");
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(87, OrderDetailComponent_Conditional_4_Conditional_87_Template, 12, 6, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(88, OrderDetailComponent_Conditional_4_Conditional_88_Template, 1, 2, "app-receipt-dialog", 24);
  }
  if (rf & 2) {
    const o_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r4.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 25, o_r4.orderDate, "EEEE, dd MMM yyyy \u2022 h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275property("status", o_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(o_r4.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 28, o_r4.subtotal));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(o_r4.discountAmount > 0 ? 39 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 30, o_r4.taxAmount));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 32, o_r4.grandTotal));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(o_r4.customerName || "Walk-in");
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.customerMobile ? 61 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r4.orderType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((o_r4.payment == null ? null : o_r4.payment.method) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-success", (o_r4.payment == null ? null : o_r4.payment.status) === "Paid")("badge-warning", (o_r4.payment == null ? null : o_r4.payment.status) !== "Paid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((o_r4.payment == null ? null : o_r4.payment.status) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-success", o_r4.inventoryDeducted)("badge-neutral", !o_r4.inventoryDeducted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r4.inventoryDeducted ? "Deducted" : "Not yet", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r4.createdBy || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isFinal() ? 87 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showReceipt() ? 88 : -1);
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  id;
  // from route param via component input binding
  orders = inject(OrderService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  loading = signal(true);
  order = signal(null);
  busy = signal(false);
  showReceipt = signal(false);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.orders.order(+this.id).subscribe({
      next: (o) => {
        this.order.set(o);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  setStatus(status) {
    this.busy.set(true);
    this.orders.setStatus(+this.id, status).subscribe({
      next: (o) => {
        this.order.set(o);
        this.busy.set(false);
        this.toast.success(`Marked ${status}.`);
      },
      error: () => {
        this.busy.set(false);
        this.load();
      }
    });
  }
  complete() {
    this.busy.set(true);
    this.orders.complete(+this.id).subscribe({
      next: (o) => {
        this.order.set(o);
        this.busy.set(false);
        this.toast.success("Order completed & inventory updated.");
      },
      error: () => {
        this.busy.set(false);
        this.load();
      }
    });
  }
  cancel() {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Cancel this order?",
        message: "This cannot be undone. Inventory will not be deducted.",
        confirmText: "Cancel Order",
        danger: true
      });
      if (!ok)
        return;
      this.busy.set(true);
      this.orders.cancel(+this.id).subscribe({
        next: (o) => {
          this.order.set(o);
          this.busy.set(false);
          this.toast.success("Order cancelled.");
        },
        error: () => this.busy.set(false)
      });
    });
  }
  can(status) {
    const s = this.order()?.status;
    if (!s || s === "Completed" || s === "Cancelled")
      return false;
    const flow = ["Pending", "Preparing", "Ready", "Completed"];
    return flow.indexOf(status) === flow.indexOf(s) + 1;
  }
  isFinal() {
    const s = this.order()?.status;
    return s === "Completed" || s === "Cancelled";
  }
  static \u0275fac = function OrderDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], inputs: { id: "id" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [["routerLink", "/orders", 1, "back"], ["name", "chevronDown", 2, "transform", "rotate(90deg)", 3, "size"], [1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "flex", "gap-8", "items-center"], [3, "status"], [1, "btn", "btn-secondary", 3, "click"], ["name", "print", 3, "size"], [1, "detail-grid"], [1, "card"], [1, "card-pad"], [1, "section-title"], [1, "table-wrap"], [1, "data"], [1, "ar"], [1, "totals"], [1, "tr"], [1, "tr", "grand"], [1, "side"], [1, "card", "card-pad"], [1, "section-title", "mb-16"], [1, "info"], [1, "badge"], [3, "orderId", "showComplete"], [1, "ar", "mono"], [1, "actions"], [1, "btn", "btn-secondary", "btn-block", 3, "disabled"], [1, "btn", "btn-success", "btn-block", 3, "click", "disabled"], ["name", "check", 3, "size"], [1, "btn", "btn-danger", "btn-block", 3, "click", "disabled"], ["name", "close", 3, "size"], [1, "btn", "btn-secondary", "btn-block", 3, "click", "disabled"], [3, "closed", "orderId", "showComplete"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275element(1, "app-icon", 1);
      \u0275\u0275text(2, " Back to Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 1, 0, "app-loading")(4, OrderDetailComponent_Conditional_4_Template, 89, 34);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.order()) ? 4 : -1, tmp_2_0);
    }
  }, dependencies: [CommonModule, DatePipe, RouterLink, IconComponent, MoneyPipe, OrderStatusBadge, LoadingComponent, ReceiptDialogComponent], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: var(--orange-dark);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 16px;\n  align-items: start;\n}\n.side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.totals[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n}\n.tr[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-secondary);\n}\n.tr.grand[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  padding-top: 8px;\n  border-top: 1px dashed var(--border);\n}\n.tr.grand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text);\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 14px;\n}\n.info[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n@media (max-width: 900px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src\\app\\features\\orders\\order-detail.component.ts", lineNumber: 21 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=chunk-7MHGXXEA.js.map
