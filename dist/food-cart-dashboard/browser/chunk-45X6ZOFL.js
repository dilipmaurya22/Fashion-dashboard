import {
  LineChartComponent
} from "./chunk-NCOTNAT6.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  ReportService
} from "./chunk-WPCBNKZQ.js";
import {
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

// src/app/features/reports/sales-report.component.ts
var _forTrack0 = ($index, $item) => $item.k;
var _forTrack1 = ($index, $item) => $item.method;
function SalesReportComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function SalesReportComponent_For_8_Template_button_click_0_listener() {
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
function SalesReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function SalesReportComponent_Conditional_10_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "b", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.methodClass(p_r4.method), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.method === "Upi" ? "UPI" : p_r4.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r4.count, " orders");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, p_r4.amount));
  }
}
function SalesReportComponent_Conditional_10_ForEmpty_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "No payments in this period.");
    \u0275\u0275elementEnd();
  }
}
function SalesReportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Total Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "b");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "span", 8);
    \u0275\u0275text(14, "Avg Order Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "b");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 7)(19, "span", 8);
    \u0275\u0275text(20, "Total Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "b");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "div", 10)(26, "h3", 11);
    \u0275\u0275text(27, "Sales Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "app-line-chart", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 10)(30, "h3", 11);
    \u0275\u0275text(31, "Payment Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 13);
    \u0275\u0275repeaterCreate(33, SalesReportComponent_Conditional_10_For_34_Template, 8, 8, "div", 14, _forTrack1, false, SalesReportComponent_Conditional_10_ForEmpty_35_Template, 2, 0, "p", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, d_r5.totalSales));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r5.totalOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, d_r5.averageOrderValue));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 10, d_r5.totalDiscount));
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx_r2.series());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(d_r5.paymentBreakdown);
  }
}
var SalesReportComponent = class _SalesReportComponent {
  reports = inject(ReportService);
  loading = signal(true);
  data = signal(null);
  range = signal("7");
  ranges = [{ k: "today", l: "Today" }, { k: "yesterday", l: "Yesterday" }, { k: "7", l: "7 Days" }, { k: "30", l: "30 Days" }];
  series = computed(() => (this.data()?.series ?? []).map((p) => ({ label: p.label, value: p.sales })));
  constructor() {
    this.load();
  }
  setRange(r) {
    this.range.set(r);
    this.load();
  }
  bounds() {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    if (this.range() === "today")
      return { from: start.toISOString() };
    if (this.range() === "yesterday") {
      const y = new Date(start);
      y.setDate(y.getDate() - 1);
      return { from: y.toISOString(), to: start.toISOString() };
    }
    const days = +this.range();
    const f = new Date(start);
    f.setDate(f.getDate() - (days - 1));
    return { from: f.toISOString() };
  }
  load() {
    this.loading.set(true);
    const { from, to } = this.bounds();
    this.reports.sales(from, to).subscribe({ next: (d) => {
      this.data.set(d);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  methodClass(m) {
    return m === "Cash" ? "badge-success" : m === "Upi" ? "badge-info" : m === "Card" ? "badge-warning" : "badge-neutral";
  }
  static \u0275fac = function SalesReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesReportComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesReportComponent, selectors: [["app-sales-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "range-tabs"], [3, "active"], [3, "click"], [1, "rkpis"], [1, "card", "card-pad", "rkpi"], [1, "lbl"], [1, "grid-2"], [1, "card", "card-pad"], [1, "section-title", "mb-16"], [3, "data"], [1, "pay-list"], [1, "pay-row"], [1, "text-secondary", "text-small"], [1, "mono"]], template: function SalesReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Sales Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Revenue, orders and payment breakdown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275repeaterCreate(7, SalesReportComponent_For_8_Template, 2, 3, "button", 4, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, SalesReportComponent_Conditional_9_Template, 1, 0, "app-loading")(10, SalesReportComponent_Conditional_10_Template, 36, 12);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.ranges);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.data()) ? 10 : -1, tmp_2_0);
    }
  }, dependencies: [CommonModule, MoneyPipe, LoadingComponent, LineChartComponent], styles: ["\n\n.range-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.range-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--card);\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n}\n.range-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--charcoal);\n  color: #fff;\n  border-color: var(--charcoal);\n}\n.rkpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.rkpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rkpi[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.rkpi[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n}\n.pay-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pay-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border);\n}\n.pay-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 1024px) {\n  .rkpis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .rkpis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rkpi[_ngcontent-%COMP%]   b.warn[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.rkpi[_ngcontent-%COMP%]   b.danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n/*# sourceMappingURL=reports.shared.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesReportComponent, { className: "SalesReportComponent", filePath: "src\\app\\features\\reports\\sales-report.component.ts", lineNumber: 16 });
})();
export {
  SalesReportComponent
};
//# sourceMappingURL=chunk-45X6ZOFL.js.map
