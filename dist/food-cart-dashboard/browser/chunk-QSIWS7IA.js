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

// src/app/features/reports/best-selling.component.ts
var _forTrack0 = ($index, $item) => $item.k;
var _forTrack1 = ($index, $item) => $item.name;
function BestSellingComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function BestSellingComponent_For_8_Template_button_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRange(r_r2.k));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.range() === r_r2.k);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.l);
  }
}
function BestSellingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function BestSellingComponent_Conditional_10_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 12)(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 13);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const \u0275$index_58_r5 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_58_r5 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.quantitySold);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, t_r4.revenue));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, t_r4.profit));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", t_r4.profitMargin >= 40)("badge-warning", t_r4.profitMargin < 40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r4.profitMargin, "%");
  }
}
function BestSellingComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 8);
    \u0275\u0275text(2, "Units Sold");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-bar-chart", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 10)(6, "table", 11)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Food");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Qty Sold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Est. Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Margin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, BestSellingComponent_Conditional_10_For_23_Template, 18, 14, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.chart());
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.data());
  }
}
function BestSellingComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-empty-state", 15);
    \u0275\u0275elementEnd();
  }
}
var BestSellingComponent = class _BestSellingComponent {
  reports = inject(ReportService);
  loading = signal(true);
  data = signal([]);
  range = signal("30");
  ranges = [{ k: "7", l: "7 Days" }, { k: "30", l: "30 Days" }, { k: "90", l: "90 Days" }];
  chart = computed(() => this.data().slice(0, 8).map((t) => ({ label: t.name, value: t.quantitySold })));
  constructor() {
    this.load();
  }
  setRange(r) {
    this.range.set(r);
    this.load();
  }
  load() {
    this.loading.set(true);
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - (+this.range() - 1));
    this.reports.bestSelling(start.toISOString()).subscribe({ next: (d) => {
      this.data.set(d);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  static \u0275fac = function BestSellingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BestSellingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BestSellingComponent, selectors: [["app-best-selling"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "range-tabs"], [3, "active"], [1, "card"], [3, "click"], [1, "card", "card-pad", "mb-24"], [1, "section-title", "mb-16"], [3, "data"], [1, "table-wrap"], [1, "data"], [1, "mono"], [1, "mono", "pos"], [1, "badge"], ["icon", "best", "title", "No sales in this period", "message", "Once orders are completed, best sellers appear here."]], template: function BestSellingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Best Selling Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Top performers by quantity, revenue and profit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275repeaterCreate(7, BestSellingComponent_For_8_Template, 2, 3, "button", 4, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, BestSellingComponent_Conditional_9_Template, 1, 0, "app-loading")(10, BestSellingComponent_Conditional_10_Template, 24, 1)(11, BestSellingComponent_Conditional_11_Template, 2, 0, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.ranges);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 9 : ctx.data().length ? 10 : 11);
    }
  }, dependencies: [CommonModule, MoneyPipe, LoadingComponent, EmptyStateComponent, BarChartComponent], styles: ["\n\n.range-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.range-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--card);\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n}\n.range-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--charcoal);\n  color: #fff;\n  border-color: var(--charcoal);\n}\n.rkpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.rkpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rkpi[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.rkpi[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n}\n.pay-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pay-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border);\n}\n.pay-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 1024px) {\n  .rkpis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .rkpis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rkpi[_ngcontent-%COMP%]   b.warn[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.rkpi[_ngcontent-%COMP%]   b.danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n/*# sourceMappingURL=reports.shared.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BestSellingComponent, { className: "BestSellingComponent", filePath: "src\\app\\features\\reports\\best-selling.component.ts", lineNumber: 16 });
})();
export {
  BestSellingComponent
};
//# sourceMappingURL=chunk-QSIWS7IA.js.map
