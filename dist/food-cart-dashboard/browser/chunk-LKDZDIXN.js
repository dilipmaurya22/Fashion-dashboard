import {
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/shared/ui/badges.ts
var ORDER_MAP = {
  Pending: { cls: "badge-warning", label: "Pending" },
  Preparing: { cls: "badge-info", label: "Preparing" },
  Ready: { cls: "badge-success", label: "Ready" },
  Completed: { cls: "badge-success", label: "Completed" },
  Cancelled: { cls: "badge-danger", label: "Cancelled" }
};
var OrderStatusBadge = class _OrderStatusBadge {
  _s = signal("Pending");
  set status(v) {
    this._s.set(v);
  }
  cls = computed(() => ORDER_MAP[this._s()]?.cls ?? "badge-neutral");
  label = computed(() => ORDER_MAP[this._s()]?.label ?? this._s());
  static \u0275fac = function OrderStatusBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderStatusBadge)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderStatusBadge, selectors: [["app-order-status"]], inputs: { status: "status" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 4, consts: [[1, "dot"]], template: function OrderStatusBadge_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span");
      \u0275\u0275element(1, "span", 0);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMapInterpolate1("badge ", ctx.cls(), "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderStatusBadge, { className: "OrderStatusBadge", filePath: "src\\app\\shared\\ui\\badges.ts", lineNumber: 16 });
})();
var STOCK_MAP = {
  "Available": "badge-success",
  "Low Stock": "badge-warning",
  "Out of Stock": "badge-danger"
};
var StockStatusBadge = class _StockStatusBadge {
  _s = signal("Available");
  set status(v) {
    this._s.set(v);
  }
  cls = computed(() => STOCK_MAP[this._s()] ?? "badge-neutral");
  static \u0275fac = function StockStatusBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockStatusBadge)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockStatusBadge, selectors: [["app-stock-status"]], inputs: { status: "status" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 4, consts: [[1, "dot"]], template: function StockStatusBadge_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span");
      \u0275\u0275element(1, "span", 0);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMapInterpolate1("badge ", ctx.cls(), "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx._s());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockStatusBadge, { className: "StockStatusBadge", filePath: "src\\app\\shared\\ui\\badges.ts", lineNumber: 34 });
})();

export {
  OrderStatusBadge,
  StockStatusBadge
};
//# sourceMappingURL=chunk-LKDZDIXN.js.map
