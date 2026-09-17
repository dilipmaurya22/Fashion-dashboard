import {
  BarChartComponent,
  DonutChartComponent,
  LineChartComponent
} from "./chunk-NCOTNAT6.js";
import {
  OrderStatusBadge
} from "./chunk-LKDZDIXN.js";
import {
  AuthService
} from "./chunk-L3OMD2SC.js";
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
  RouterLink
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  DatePipe,
  IconComponent,
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
  ɵɵtextInterpolate2
} from "./chunk-G5ETVSKB.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function DashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function DashboardComponent_Conditional_11_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-donut-chart", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.statusSegments());
  }
}
function DashboardComponent_Conditional_11_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 29);
  }
}
function DashboardComponent_Conditional_11_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-bar-chart", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.topFood());
  }
}
function DashboardComponent_Conditional_11_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 30);
  }
}
function DashboardComponent_Conditional_11_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "app-order-status", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, o_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", o_r2.customerName || "Walk-in", " \u2022 ", o_r2.itemCount, " items");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, o_r2.grandTotal));
    \u0275\u0275advance(2);
    \u0275\u0275property("status", o_r2.status);
  }
}
function DashboardComponent_Conditional_11_ForEmpty_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 34);
  }
}
function DashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "span", 8);
    \u0275\u0275text(4, "Today's Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275element(6, "app-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275element(11, "app-icon", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "span", 8);
    \u0275\u0275text(16, "Today's Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275element(18, "app-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 16);
    \u0275\u0275text(22, "Orders placed today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 6)(24, "div", 7)(25, "span", 8);
    \u0275\u0275text(26, "Avg Order Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 17);
    \u0275\u0275element(28, "app-icon", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 11);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 16);
    \u0275\u0275text(33, "Per order today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 6)(35, "div", 7)(36, "span", 8);
    \u0275\u0275text(37, "Low Stock Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 19);
    \u0275\u0275element(39, "app-icon", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 11);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "a", 21);
    \u0275\u0275text(43, "Needs restocking \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 22)(45, "div", 23)(46, "div", 24)(47, "h3", 25);
    \u0275\u0275text(48, "Sales Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 26);
    \u0275\u0275text(50, "Last 7 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "app-line-chart", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 23)(53, "h3", 28);
    \u0275\u0275text(54, "Orders by Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, DashboardComponent_Conditional_11_Conditional_55_Template, 1, 1, "app-donut-chart", 27)(56, DashboardComponent_Conditional_11_Conditional_56_Template, 1, 0, "app-empty-state", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 22)(58, "div", 23)(59, "h3", 28);
    \u0275\u0275text(60, "Top Selling Food");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, DashboardComponent_Conditional_11_Conditional_61_Template, 1, 1, "app-bar-chart", 27)(62, DashboardComponent_Conditional_11_Conditional_62_Template, 1, 0, "app-empty-state", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 23)(64, "div", 24)(65, "h3", 25);
    \u0275\u0275text(66, "Recent Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "a", 31);
    \u0275\u0275text(68, "View all \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 32);
    \u0275\u0275repeaterCreate(70, DashboardComponent_Conditional_11_For_71_Template, 11, 10, "a", 33, _forTrack0, false, DashboardComponent_Conditional_11_ForEmpty_72_Template, 1, 0, "app-empty-state", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 22, d_r3.kpis.todaysSales));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("up", d_r3.kpis.salesChangePercent >= 0)("down", d_r3.kpis.salesChangePercent < 0);
    \u0275\u0275advance();
    \u0275\u0275property("name", d_r3.kpis.salesChangePercent >= 0 ? "trendup" : "trenddown")("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", d_r3.kpis.salesChangePercent >= 0 ? "+" : "", "", d_r3.kpis.salesChangePercent, "% vs yesterday ");
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.kpis.todaysOrders);
    \u0275\u0275advance(8);
    \u0275\u0275property("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 24, d_r3.kpis.averageOrderValue));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("warn", d_r3.kpis.lowStockItems > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.kpis.lowStockItems);
    \u0275\u0275advance(10);
    \u0275\u0275property("data", ctx_r0.salesSeries());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.statusSegments().length ? 55 : 56);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.topFood().length ? 61 : 62);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(d_r3.recentOrders);
  }
}
var STATUS_COLORS = {
  Pending: "#F59E0B",
  Preparing: "#2563EB",
  Ready: "#16A34A",
  Completed: "#15803D",
  Cancelled: "#DC2626"
};
var DashboardComponent = class _DashboardComponent {
  reports = inject(ReportService);
  auth = inject(AuthService);
  loading = signal(true);
  data = signal(null);
  now = /* @__PURE__ */ new Date();
  salesSeries = computed(() => (this.data()?.salesOverview ?? []).map((p) => ({ label: p.label, value: p.sales })));
  statusSegments = computed(() => (this.data()?.ordersByStatus ?? []).map((s) => ({ label: s.status, value: s.count, color: STATUS_COLORS[s.status] ?? "#94A3B8" })));
  topFood = computed(() => (this.data()?.topSelling ?? []).map((t) => ({ label: t.name, value: t.quantitySold })));
  constructor() {
    this.reports.dashboard().subscribe({
      next: (d) => {
        this.data.set(d);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  greeting() {
    const h = this.now.getHours();
    return h < 12 ? "Good Morning" : h < 17 ? "Good Afternoon" : "Good Evening";
  }
  firstName() {
    return (this.auth.user()?.fullName || "").split(" ")[0];
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 9, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], ["routerLink", "/pos", 1, "btn", "btn-primary"], ["name", "plus", 3, "size"], [1, "kpis"], [1, "card", "card-pad", "kpi"], [1, "kpi-head"], [1, "kpi-label"], [1, "kpi-ic", "orange"], ["name", "sales", 3, "size"], [1, "kpi-value"], [1, "kpi-delta"], [3, "name", "size"], [1, "kpi-ic", "blue"], ["name", "orders", 3, "size"], [1, "kpi-sub", "text-secondary"], [1, "kpi-ic", "green"], ["name", "payment", 3, "size"], [1, "kpi-ic", "amber"], ["name", "lowstock", 3, "size"], ["routerLink", "/inventory/low-stock", 1, "kpi-sub", "link"], [1, "grid-2", "mt-24"], [1, "card", "card-pad"], [1, "flex", "justify-between", "items-center", "mb-16"], [1, "section-title"], [1, "badge", "badge-neutral"], [3, "data"], [1, "section-title", "mb-16"], ["icon", "orders", "title", "No orders today", "message", "Orders will appear here as they come in."], ["icon", "food", "title", "No sales yet", "message", ""], ["routerLink", "/orders", 1, "link", "text-small"], [1, "recent"], [1, "recent-row", 3, "routerLink"], ["icon", "orders", "title", "No recent orders", "message", ""], [1, "r-main"], [1, "r-num"], [1, "text-secondary", "text-small"], [1, "r-side"], [1, "r-amt"], [3, "status"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275element(8, "app-icon", 4);
      \u0275\u0275text(9, " New Order");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, DashboardComponent_Conditional_10_Template, 1, 0, "app-loading")(11, DashboardComponent_Conditional_11_Template, 73, 26);
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.greeting(), ", ", ctx.firstName(), "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, ctx.now, "EEEE, dd MMMM yyyy"));
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = ctx.data()) ? 11 : -1, tmp_4_0);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    RouterLink,
    IconComponent,
    MoneyPipe,
    OrderStatusBadge,
    LoadingComponent,
    EmptyStateComponent,
    LineChartComponent,
    DonutChartComponent,
    BarChartComponent
  ], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.kpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.kpi.warn[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.4);\n}\n.kpi-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.kpi-ic[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-ic.orange[_ngcontent-%COMP%] {\n  background: var(--orange-soft);\n  color: var(--orange-dark);\n}\n.kpi-ic.blue[_ngcontent-%COMP%] {\n  background: var(--info-soft);\n  color: var(--info);\n}\n.kpi-ic.green[_ngcontent-%COMP%] {\n  background: var(--success-soft);\n  color: var(--success);\n}\n.kpi-ic.amber[_ngcontent-%COMP%] {\n  background: var(--warning-soft);\n  color: var(--warning);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.kpi-delta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.kpi-delta.up[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.kpi-delta.down[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.link[_ngcontent-%COMP%] {\n  color: var(--orange-dark);\n  font-weight: 600;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.recent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.recent-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 8px;\n  border-bottom: 1px solid var(--border);\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.recent-row[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n.recent-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.r-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.r-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.r-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.r-amt[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n@media (max-width: 1100px) {\n  .kpis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .kpis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 25 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-RKQO2MB2.js.map
