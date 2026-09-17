import {
  StockStatusBadge
} from "./chunk-LKDZDIXN.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  InventoryService
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G5ETVSKB.js";

// src/app/features/inventory/low-stock.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LowStockComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function LowStockComponent_Conditional_10_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 9)(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 11)(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275element(19, "app-stock-status", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1.currentStock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r1.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", i_r1.minimumStock, " ", i_r1.unit, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", i_r1.minimumStock - i_r1.currentStock > 0 ? i_r1.minimumStock - i_r1.currentStock : 0, " ", i_r1.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, i_r1.stockValue));
    \u0275\u0275advance(3);
    \u0275\u0275property("status", i_r1.status);
  }
}
function LowStockComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "table", 7)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Ingredient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Current");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Minimum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Shortfall");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, LowStockComponent_Conditional_10_For_19_Template, 20, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.items());
  }
}
function LowStockComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-empty-state", 13);
    \u0275\u0275elementEnd();
  }
}
var LowStockComponent = class _LowStockComponent {
  inv = inject(InventoryService);
  loading = signal(true);
  items = signal([]);
  constructor() {
    this.inv.lowStock().subscribe({ next: (i) => {
      this.items.set(i);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  static \u0275fac = function LowStockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LowStockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LowStockComponent, selectors: [["app-low-stock"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], ["routerLink", "/inventory/stock-in", 1, "btn", "btn-primary"], ["name", "stockin", 3, "size"], [1, "card"], [1, "table-wrap"], [1, "data"], [1, "text-secondary", "text-small"], [1, "mono"], [1, "mono", "text-secondary"], [1, "mono", "neg"], [3, "status"], ["icon", "check", "title", "All good!", "message", "No ingredients are low on stock right now."]], template: function LowStockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Low Stock Alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Ingredients at or below their minimum level");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "a", 3);
      \u0275\u0275element(7, "app-icon", 4);
      \u0275\u0275text(8, " Restock");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, LowStockComponent_Conditional_9_Template, 1, 0, "app-loading")(10, LowStockComponent_Conditional_10_Template, 20, 0, "div", 5)(11, LowStockComponent_Conditional_11_Template, 2, 0, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 9 : ctx.items().length ? 10 : 11);
    }
  }, dependencies: [CommonModule, RouterLink, IconComponent, MoneyPipe, StockStatusBadge, LoadingComponent, EmptyStateComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LowStockComponent, { className: "LowStockComponent", filePath: "src\\app\\features\\inventory\\low-stock.component.ts", lineNumber: 17 });
})();
export {
  LowStockComponent
};
//# sourceMappingURL=chunk-6U2PELSX.js.map
