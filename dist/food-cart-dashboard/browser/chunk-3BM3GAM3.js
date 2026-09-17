import {
  AuthService
} from "./chunk-L3OMD2SC.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  DatePipe,
  IconComponent,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/core/services/theme.service.ts
var KEY = "fc_theme";
var ThemeService = class _ThemeService {
  _dark = signal(localStorage.getItem(KEY) === "dark");
  dark = this._dark.asReadonly();
  constructor() {
    this.apply();
  }
  toggle() {
    this._dark.set(!this._dark());
    localStorage.setItem(KEY, this._dark() ? "dark" : "light");
    this.apply();
  }
  apply() {
    document.documentElement.setAttribute("data-theme", this._dark() ? "dark" : "light");
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};

// src/app/layout/shell.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.route;
function ShellComponent_For_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275element(1, "app-icon", 32);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r1.icon)("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function ShellComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ShellComponent_For_9_For_4_Template, 4, 4, "a", 31, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r2.items);
  }
}
function ShellComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function ShellComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
var MANAGER = ["Admin", "Manager"];
var ShellComponent = class _ShellComponent {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  router = inject(Router);
  sidebarOpen = signal(false);
  now = signal(/* @__PURE__ */ new Date());
  groups = [
    { title: "Main", items: [
      { label: "Dashboard", icon: "dashboard", route: "/dashboard" },
      { label: "POS / New Order", icon: "pos", route: "/pos" },
      { label: "Orders", icon: "orders", route: "/orders" }
    ] },
    { title: "Products", items: [
      { label: "Food Items", icon: "food", route: "/food-items" },
      { label: "Categories", icon: "category", route: "/categories", roles: MANAGER }
    ] },
    { title: "Inventory", items: [
      { label: "Inventory", icon: "inventory", route: "/inventory", roles: MANAGER },
      { label: "Stock In", icon: "stockin", route: "/inventory/stock-in", roles: MANAGER },
      { label: "Transactions", icon: "adjust", route: "/inventory/transactions" },
      { label: "Low Stock", icon: "lowstock", route: "/inventory/low-stock" }
    ] },
    { title: "People", items: [
      { label: "Customers", icon: "customers", route: "/customers" }
    ] },
    { title: "Reports", items: [
      { label: "Sales Report", icon: "sales", route: "/reports/sales", roles: MANAGER },
      { label: "Inventory Report", icon: "reports", route: "/reports/inventory", roles: MANAGER },
      { label: "Best Selling", icon: "best", route: "/reports/best-selling", roles: MANAGER }
    ] },
    { title: "Settings", items: [
      { label: "Business Settings", icon: "settings", route: "/settings", roles: MANAGER },
      { label: "Users & Roles", icon: "users", route: "/settings/users", roles: ["Admin"] }
    ] }
  ];
  visibleGroups = computed(() => {
    const role = this.auth.role();
    return this.groups.map((g) => __spreadProps(__spreadValues({}, g), { items: g.items.filter((i) => !i.roles || role && i.roles.includes(role)) })).filter((g) => g.items.length);
  });
  constructor() {
    setInterval(() => this.now.set(/* @__PURE__ */ new Date()), 3e4);
    this.router.events.subscribe(() => this.sidebarOpen.set(false));
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  logout() {
    this.auth.logout();
  }
  greeting() {
    const h = this.now().getHours();
    return h < 12 ? "Good Morning" : h < 17 ? "Good Afternoon" : "Good Evening";
  }
  initials() {
    const n = this.auth.user()?.fullName || "U";
    return n.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 14, consts: [[1, "shell"], [1, "sidebar"], [1, "brand"], [1, "logo"], ["name", "food", 3, "size"], [1, "brand-name"], [1, "nav"], [1, "nav-group"], [1, "backdrop"], [1, "main"], [1, "header"], [1, "icon-btn", "menu-btn", 3, "click"], ["name", "menu"], [1, "search"], ["name", "search", 3, "size"], ["type", "text", "placeholder", "Search orders, food, customers\u2026"], [1, "spacer"], [1, "datetime"], ["title", "Toggle theme", 1, "icon-btn", 3, "click"], [3, "name"], ["title", "Notifications", 1, "icon-btn"], ["name", "bell"], [1, "profile"], [1, "avatar"], [1, "who"], [1, "name"], [1, "role"], ["title", "Logout", 1, "icon-btn", 3, "click"], ["name", "logout", 3, "size"], [1, "content"], [1, "nav-title"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [3, "name", "size"], [1, "backdrop", 3, "click"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275element(4, "app-icon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "Food Cart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 6);
      \u0275\u0275repeaterCreate(8, ShellComponent_For_9_Template, 5, 1, "div", 7, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, ShellComponent_Conditional_10_Template, 1, 0, "div", 8);
      \u0275\u0275elementStart(11, "div", 9)(12, "header", 10)(13, "button", 11);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_13_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(14, "app-icon", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275element(16, "app-icon", 14)(17, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "div", 16);
      \u0275\u0275elementStart(19, "div", 17);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 18);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_22_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275element(23, "app-icon", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 20);
      \u0275\u0275element(25, "app-icon", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 22)(27, "div", 23);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 26);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "button", 27);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_34_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(35, "app-icon", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "main", 29);
      \u0275\u0275element(37, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.visibleGroups());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sidebarOpen() ? 10 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 11, ctx.now(), "EEE, dd MMM \u2022 h:mm a"));
      \u0275\u0275advance(3);
      \u0275\u0275property("name", ctx.theme.dark() ? "sun" : "moon");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.initials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_8_0 = ctx.auth.user()) == null ? null : tmp_8_0.fullName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((tmp_9_0 = ctx.auth.user()) == null ? null : tmp_9_0.role);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 18);
    }
  }, dependencies: [CommonModule, DatePipe, RouterOutlet, RouterLink, RouterLinkActive, IconComponent], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  flex-shrink: 0;\n  background: var(--sidebar);\n  color: var(--sidebar-text);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  overflow-y: auto;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: var(--orange);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%] {\n  padding: 8px 12px 24px;\n}\n.nav-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.nav-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7688;\n  padding: 0 12px 8px;\n  font-weight: 600;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  color: var(--sidebar-text);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 2px;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: var(--sidebar-w);\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.header[_ngcontent-%COMP%] {\n  height: var(--header-h);\n  background: var(--card);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 20px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 12px;\n  width: 340px;\n  color: var(--text-secondary);\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  color: var(--text);\n  width: 100%;\n  font-size: 14px;\n}\n.datetime[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n  color: var(--text);\n}\n.menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 8px;\n  border-left: 1px solid var(--border);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: var(--orange-soft);\n  color: var(--orange-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n}\n.who[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.who[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.content[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  max-width: 1500px;\n  width: 100%;\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 90;\n}\n@media (max-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.25s;\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .search[_ngcontent-%COMP%] {\n    width: auto;\n    flex: 1;\n    min-width: 0;\n  }\n  .datetime[_ngcontent-%COMP%], \n   .who[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 560px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src\\app\\layout\\shell.component.ts", lineNumber: 20 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-3BM3GAM3.js.map
