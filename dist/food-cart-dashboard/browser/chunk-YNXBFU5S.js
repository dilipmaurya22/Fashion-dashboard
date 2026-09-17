import {
  ToastService
} from "./chunk-3FQWZ3YU.js";
import {
  OrderService
} from "./chunk-WPCBNKZQ.js";
import {
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import {
  CommonModule,
  DatePipe,
  EventEmitter,
  IconComponent,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-G5ETVSKB.js";

// src/app/features/orders/receipt-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReceiptDialogComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.address);
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ph: ", r_r2.mobileNumber, "");
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("GST: ", r_r2.gstNumber, "");
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Customer: ", r_r2.customerName, "");
  }
}
function ReceiptDialogComponent_Conditional_7_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 10)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r3.foodName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r2.currencySymbol, "", i_r3.lineTotal.toFixed(2), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", i_r3.quantity, " x ", r_r2.currencySymbol, "", i_r3.unitPrice.toFixed(2), "");
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("- ", r_r2.currencySymbol, "", r_r2.discountAmount.toFixed(2), "");
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r2.currencySymbol, "", r_r2.taxAmount.toFixed(2), "");
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 22);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 23);
    \u0275\u0275text(1, " Complete Order ");
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function ReceiptDialogComponent_Conditional_7_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ReceiptDialogComponent_Conditional_7_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.complete());
    });
    \u0275\u0275template(1, ReceiptDialogComponent_Conditional_7_Conditional_40_Conditional_1_Template, 1, 1, "app-spinner", 22)(2, ReceiptDialogComponent_Conditional_7_Conditional_40_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r4.completing());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.completing() ? 1 : 2);
  }
}
function ReceiptDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReceiptDialogComponent_Conditional_7_Conditional_3_Template, 2, 1, "div", 8)(4, ReceiptDialogComponent_Conditional_7_Conditional_4_Template, 2, 1, "div", 8)(5, ReceiptDialogComponent_Conditional_7_Conditional_5_Template, 2, 1, "div", 8);
    \u0275\u0275element(6, "div", 9);
    \u0275\u0275elementStart(7, "div", 10)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ReceiptDialogComponent_Conditional_7_Conditional_16_Template, 3, 1, "div", 11);
    \u0275\u0275element(17, "div", 9);
    \u0275\u0275repeaterCreate(18, ReceiptDialogComponent_Conditional_7_For_19_Template, 9, 6, "div", 12, _forTrack0);
    \u0275\u0275element(20, "div", 9);
    \u0275\u0275elementStart(21, "div", 10)(22, "span");
    \u0275\u0275text(23, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ReceiptDialogComponent_Conditional_7_Conditional_26_Template, 5, 2, "div", 10)(27, ReceiptDialogComponent_Conditional_7_Conditional_27_Template, 5, 2, "div", 10);
    \u0275\u0275elementStart(28, "div", 13)(29, "span");
    \u0275\u0275text(30, "TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 9);
    \u0275\u0275elementStart(34, "div", 11)(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 14);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 15);
    \u0275\u0275template(40, ReceiptDialogComponent_Conditional_7_Conditional_40_Template, 3, 2, "button", 16);
    \u0275\u0275elementStart(41, "button", 17);
    \u0275\u0275listener("click", function ReceiptDialogComponent_Conditional_7_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.print());
    });
    \u0275\u0275element(42, "app-icon", 18);
    \u0275\u0275text(43, " Print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 19);
    \u0275\u0275listener("click", function ReceiptDialogComponent_Conditional_7_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.close());
    });
    \u0275\u0275text(45, "Close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.businessName);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r2.address ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r2.mobileNumber ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r2.gstNumber ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", r_r2.orderNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.orderType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, r_r2.orderDate, "dd MMM yyyy, h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r2.customerName ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r2.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", r_r2.currencySymbol, "", r_r2.subtotal.toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r2.discountAmount > 0 ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r2.taxAmount > 0 ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", r_r2.currencySymbol, "", r_r2.grandTotal.toFixed(2), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Payment: ", r_r2.paymentMethod, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.footer);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.showComplete ? 40 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function ReceiptDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-spinner");
    \u0275\u0275elementEnd();
  }
}
var ReceiptDialogComponent = class _ReceiptDialogComponent {
  orderId;
  showComplete = false;
  closed = new EventEmitter();
  orders = inject(OrderService);
  toast = inject(ToastService);
  receipt = signal(null);
  completing = signal(false);
  ngOnInit() {
    this.orders.receipt(this.orderId).subscribe((r) => this.receipt.set(r));
  }
  print() {
    window.print();
  }
  complete() {
    this.completing.set(true);
    this.orders.complete(this.orderId).subscribe({
      next: () => {
        this.completing.set(false);
        this.toast.success("Order completed & inventory updated.");
        this.closed.emit(true);
      },
      error: () => this.completing.set(false)
    });
  }
  close() {
    this.closed.emit(false);
  }
  static \u0275fac = function ReceiptDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceiptDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiptDialogComponent, selectors: [["app-receipt-dialog"]], inputs: { orderId: "orderId", showComplete: "showComplete" }, outputs: { closed: "closed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "overlay", 3, "click"], [1, "dialog", 3, "click"], [1, "dialog-head", "no-print"], [1, "close", 3, "click"], ["name", "close"], [1, "loading-r"], ["id", "print-area", 1, "receipt"], [1, "r-center", "r-biz"], [1, "r-center", "r-small"], [1, "dash"], [1, "r-row"], [1, "r-row", "r-small"], [1, "r-item"], [1, "r-row", "r-total"], [1, "r-center", "r-footer"], [1, "actions", "no-print"], [1, "btn", "btn-success", 3, "disabled"], [1, "btn", "btn-secondary", 3, "click"], ["name", "print", 3, "size"], [1, "btn", "btn-ghost", 3, "click"], [1, "r-iname"], [1, "btn", "btn-success", 3, "click", "disabled"], [3, "size"], ["name", "check", 3, "size"]], template: function ReceiptDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ReceiptDialogComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ReceiptDialogComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "Receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ReceiptDialogComponent_Template_button_click_5_listener() {
        return ctx.close();
      });
      \u0275\u0275element(6, "app-icon", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ReceiptDialogComponent_Conditional_7_Template, 46, 21)(8, ReceiptDialogComponent_Conditional_8_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_0_0 = ctx.receipt()) ? 7 : 8, tmp_0_0);
    }
  }, dependencies: [CommonModule, DatePipe, IconComponent, SpinnerComponent], styles: ['\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.5);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.dialog[_ngcontent-%COMP%] {\n  background: var(--card);\n  border-radius: var(--radius);\n  width: 100%;\n  max-width: 360px;\n  max-height: 92vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n}\n.dialog-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border-bottom: 1px solid var(--border);\n}\n.dialog-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary);\n}\n.close[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n.receipt[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  background: #fff;\n  color: #000;\n  width: 300px;\n  margin: 18px auto;\n  padding: 16px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.r-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.r-biz[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.r-small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.dash[_ngcontent-%COMP%] {\n  border-top: 1px dashed #000;\n  margin: 8px 0;\n}\n.r-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.r-iname[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.r-item[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.r-total[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.r-footer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 700;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 16px 18px;\n  border-top: 1px solid var(--border);\n  flex-wrap: wrap;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loading-r[_ngcontent-%COMP%] {\n  padding: 48px;\n  display: flex;\n  justify-content: center;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .overlay[_ngcontent-%COMP%] {\n    position: static;\n    background: none;\n    padding: 0;\n    display: block;\n  }\n  .dialog[_ngcontent-%COMP%] {\n    box-shadow: none;\n    max-width: none;\n    max-height: none;\n    overflow: visible;\n  }\n  .receipt[_ngcontent-%COMP%] {\n    width: 80mm;\n    margin: 0;\n    padding: 4mm;\n  }\n  [_nghost-%COMP%] {\n    position: absolute;\n  }\n}\n/*# sourceMappingURL=receipt-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiptDialogComponent, { className: "ReceiptDialogComponent", filePath: "src\\app\\features\\orders\\receipt-dialog.component.ts", lineNumber: 16 });
})();

export {
  ReceiptDialogComponent
};
//# sourceMappingURL=chunk-YNXBFU5S.js.map
