import {
  BarChartComponent
} from "./chunk-NCOTNAT6.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  ReportService
} from "./chunk-WPCBNKZQ.js";
import {
  EmptyStateComponent,
  LoadingComponent
} from "./chunk-ZBQMMIGL.js";
import {
  CommonModule,
  computed,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/features/reports/inventory-report.component.ts
function InventoryReportComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function InventoryReportComponent_Conditional_7_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-bar-chart", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.topUsed());
  }
}
function InventoryReportComponent_Conditional_7_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 12);
  }
}
function InventoryReportComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "Total Inventory Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "span", 5);
    \u0275\u0275text(9, "Low Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "b", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 4)(13, "span", 5);
    \u0275\u0275text(14, "Out of Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "b", 7);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 4)(18, "span", 5);
    \u0275\u0275text(19, "Wastage Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "b");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 8)(24, "div", 9)(25, "h3", 10);
    \u0275\u0275text(26, "Top Consumed Ingredients");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, InventoryReportComponent_Conditional_7_Conditional_27_Template, 1, 1, "app-bar-chart", 11)(28, InventoryReportComponent_Conditional_7_Conditional_28_Template, 1, 0, "app-empty-state", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 9)(30, "h3", 10);
    \u0275\u0275text(31, "Purchases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 13)(33, "span", 5);
    \u0275\u0275text(34, "Total Stock Purchases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "b");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "p", 14);
    \u0275\u0275text(39, "Total value of ingredient stock brought in via Stock In and opening balances.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, d_r2.totalInventoryValue));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r2.lowStockCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.outOfStockCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 8, d_r2.totalWastageValue));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.topUsed().length ? 27 : 28);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 10, d_r2.totalPurchaseValue));
  }
}
var InventoryReportComponent = class _InventoryReportComponent {
  reports = inject(ReportService);
  loading = signal(true);
  data = signal(null);
  topUsed = computed(() => (this.data()?.topUsedIngredients ?? []).map((i) => ({ label: `${i.name} (${i.unit})`, value: Math.round(i.quantityUsed) })));
  constructor() {
    this.reports.inventory().subscribe({ next: (d) => {
      this.data.set(d);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  static \u0275fac = function InventoryReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryReportComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryReportComponent, selectors: [["app-inventory-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "rkpis"], [1, "card", "card-pad", "rkpi"], [1, "lbl"], [1, "warn"], [1, "danger"], [1, "grid-2"], [1, "card", "card-pad"], [1, "section-title", "mb-16"], [3, "data"], ["icon", "inventory", "title", "No consumption yet", "message", "Complete some orders to see usage."], [1, "rkpi"], [1, "text-secondary", "text-small", "mt-16"]], template: function InventoryReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Inventory Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Stock value, consumption and wastage");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(6, InventoryReportComponent_Conditional_6_Template, 1, 0, "app-loading")(7, InventoryReportComponent_Conditional_7_Template, 40, 12);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.data()) ? 7 : -1, tmp_1_0);
    }
  }, dependencies: [CommonModule, MoneyPipe, LoadingComponent, EmptyStateComponent, BarChartComponent], styles: ["\n\n.range-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.range-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--card);\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n}\n.range-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--charcoal);\n  color: #fff;\n  border-color: var(--charcoal);\n}\n.rkpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.rkpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rkpi[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.rkpi[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n}\n.pay-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pay-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border);\n}\n.pay-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 1024px) {\n  .rkpis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .rkpis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rkpi[_ngcontent-%COMP%]   b.warn[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.rkpi[_ngcontent-%COMP%]   b.danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n/*# sourceMappingURL=reports.shared.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryReportComponent, { className: "InventoryReportComponent", filePath: "src\\app\\features\\reports\\inventory-report.component.ts", lineNumber: 16 });
})();
export {
  InventoryReportComponent
};
//# sourceMappingURL=chunk-WHL2I5Q5.js.map
