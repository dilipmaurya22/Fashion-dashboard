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
import {
  InventoryService
} from "./chunk-WPCBNKZQ.js";
import {
  EmptyStateComponent,
  LoadingComponent
} from "./chunk-ZBQMMIGL.js";
import {
  CommonModule,
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-G5ETVSKB.js";

// src/app/features/inventory/transactions.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TransactionsComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1);
  }
}
function TransactionsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function TransactionsComponent_Conditional_15_Conditional_0_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 13)(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 2);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 17, t_r3.date, "dd MMM, h:mm a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3.ingredientName);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r3.badgeClass(t_r3.type), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3.type);
    \u0275\u0275advance();
    \u0275\u0275classProp("neg", t_r3.quantity < 0)("pos", t_r3.quantity > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", t_r3.quantity > 0 ? "+" : "", "", t_r3.quantity, " ", t_r3.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.previousStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.newStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.reference || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.user || "\u2014");
  }
}
function TransactionsComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Ingredient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "New");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "User");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, TransactionsComponent_Conditional_15_Conditional_0_For_22_Template, 21, 20, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "app-paginator", 12);
    \u0275\u0275listener("pageChange", function TransactionsComponent_Conditional_15_Conditional_0_Template_app_paginator_pageChange_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(r_r5.items);
    \u0275\u0275advance(2);
    \u0275\u0275property("page", r_r5.page)("pageSize", r_r5.pageSize)("totalCount", r_r5.totalCount)("totalPages", r_r5.totalPages);
  }
}
function TransactionsComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 9);
  }
}
function TransactionsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TransactionsComponent_Conditional_15_Conditional_0_Template, 24, 4)(1, TransactionsComponent_Conditional_15_Conditional_1_Template, 1, 0, "app-empty-state", 9);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.items.length ? 0 : 1);
  }
}
var TransactionsComponent = class _TransactionsComponent {
  inv = inject(InventoryService);
  loading = signal(true);
  result = signal(null);
  page = signal(1);
  type = signal("");
  types = ["Purchase", "Sale", "Adjustment", "Wastage", "Return"];
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.inv.transactions({ page: this.page(), pageSize: 20, type: this.type() }).subscribe({ next: (r) => {
      this.result.set(r);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  changeFilter() {
    this.page.set(1);
    this.load();
  }
  goPage(p) {
    this.page.set(p);
    this.load();
  }
  badgeClass(t) {
    return t === "Purchase" ? "badge-success" : t === "Sale" ? "badge-info" : t === "Wastage" ? "badge-danger" : "badge-warning";
  }
  static \u0275fac = function TransactionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["app-transactions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 3, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "card"], [1, "filters"], [1, "spacer"], [1, "form-control", "filt", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["icon", "adjust", "title", "No transactions yet", "message", "Stock movements will appear here."], [1, "table-wrap"], [1, "data"], [3, "pageChange", "page", "pageSize", "totalCount", "totalPages"], [1, "mono"], [1, "mono", "text-secondary"]], template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Inventory Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Every stock movement \u2014 purchases, sales, adjustments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4);
      \u0275\u0275element(8, "div", 5);
      \u0275\u0275elementStart(9, "select", 6);
      \u0275\u0275listener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_9_listener($event) {
        ctx.type.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(10, "option", 7);
      \u0275\u0275text(11, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(12, TransactionsComponent_For_13_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, TransactionsComponent_Conditional_14_Template, 1, 0, "app-loading")(15, TransactionsComponent_Conditional_15_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("ngModel", ctx.type());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.types);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.result()) ? 15 : -1, tmp_3_0);
    }
  }, dependencies: [CommonModule, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, LoadingComponent, EmptyStateComponent, PaginatorComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent", filePath: "src\\app\\features\\inventory\\transactions.component.ts", lineNumber: 16 });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-K6QJW7SK.js.map
