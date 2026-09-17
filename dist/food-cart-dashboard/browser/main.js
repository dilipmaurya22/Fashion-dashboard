import {
  AuthService
} from "./chunk-L3OMD2SC.js";
import {
  ConfirmDialogComponent
} from "./chunk-DNXBLQSG.js";
import {
  ToastService
} from "./chunk-3FQWZ3YU.js";
import {
  Router,
  RouterOutlet,
  provideRouter,
  withComponentInputBinding
} from "./chunk-YPNFZRGU.js";
import {
  IconComponent,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideZoneChangeDetection,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/core/guards/guards.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  router.navigate(["/login"]);
  return false;
};
var roleGuard = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const toast = inject(ToastService);
  const roles = route.data?.["roles"];
  if (!roles || auth.hasRole(...roles))
    return true;
  toast.error("You do not have permission to access that page.");
  router.navigate(["/dashboard"]);
  return false;
};

// src/app/app.routes.ts
var MANAGER = ["Admin", "Manager"];
var routes = [
  { path: "login", loadComponent: () => import("./chunk-7EN6XA37.js").then((m) => m.LoginComponent) },
  {
    path: "",
    loadComponent: () => import("./chunk-3BM3GAM3.js").then((m) => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", loadComponent: () => import("./chunk-RKQO2MB2.js").then((m) => m.DashboardComponent) },
      { path: "pos", loadComponent: () => import("./chunk-YK7UGGE5.js").then((m) => m.PosComponent) },
      { path: "orders", loadComponent: () => import("./chunk-EYA3JJLV.js").then((m) => m.OrdersComponent) },
      { path: "orders/:id", loadComponent: () => import("./chunk-7MHGXXEA.js").then((m) => m.OrderDetailComponent) },
      { path: "food-items", loadComponent: () => import("./chunk-VWGRFIBT.js").then((m) => m.FoodItemsComponent) },
      { path: "categories", canActivate: [roleGuard], data: { roles: MANAGER }, loadComponent: () => import("./chunk-ZWXQU5KI.js").then((m) => m.CategoriesComponent) },
      { path: "inventory", canActivate: [roleGuard], data: { roles: MANAGER }, loadComponent: () => import("./chunk-PNBX5QB2.js").then((m) => m.InventoryComponent) },
      { path: "inventory/stock-in", canActivate: [roleGuard], data: { roles: MANAGER }, loadComponent: () => import("./chunk-3ACYHAF7.js").then((m) => m.StockInComponent) },
      { path: "inventory/transactions", loadComponent: () => import("./chunk-K6QJW7SK.js").then((m) => m.TransactionsComponent) },
      { path: "inventory/low-stock", loadComponent: () => import("./chunk-6U2PELSX.js").then((m) => m.LowStockComponent) },
      { path: "customers", loadComponent: () => import("./chunk-KIWDZ3Z5.js").then((m) => m.CustomersComponent) },
      { path: "customers/:id", loadComponent: () => import("./chunk-Y2BMCXDJ.js").then((m) => m.CustomerDetailComponent) },
      { path: "reports/sales", canActivate: [roleGuard], data: { roles: MANAGER }, loadComponent: () => import("./chunk-45X6ZOFL.js").then((m) => m.SalesReportComponent) },
      { path: "reports/inventory", canActivate: [roleGuard], data: { roles: MANAGER }, loadComponent: () => import("./chunk-WHL2I5Q5.js").then((m) => m.InventoryReportComponent) },
      { path: "reports/best-selling", canActivate: [roleGuard], data: { roles: MANAGER }, loadComponent: () => import("./chunk-QSIWS7IA.js").then((m) => m.BestSellingComponent) },
      { path: "settings", canActivate: [roleGuard], data: { roles: MANAGER }, loadComponent: () => import("./chunk-I5OSTLTR.js").then((m) => m.SettingsComponent) },
      { path: "settings/users", canActivate: [roleGuard], data: { roles: ["Admin"] }, loadComponent: () => import("./chunk-6NAEXXSV.js").then((m) => m.UsersComponent) }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/interceptors.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token;
  if (token && req.url.includes("/api")) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};
var errorInterceptor = (req, next) => {
  const toast = inject(ToastService);
  const auth = inject(AuthService);
  const router = inject(Router);
  return next(req).pipe(catchError((err) => {
    if (err.status === 401) {
      auth.logout();
    } else if (err.status === 0) {
      toast.error("Cannot reach the server. Is the API running?");
    } else {
      const msg = err.error?.message || (err.error?.errors?.length ? err.error.errors[0] : null) || "Something went wrong.";
      if (!(err.status === 400 && router.url.includes("/login")))
        toast.error(msg);
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor]))
  ]
};

// src/app/shared/ui/toast-container.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastContainerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ToastContainerComponent_For_2_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toast.dismiss(t_r2.id));
    });
    \u0275\u0275element(1, "app-icon", 3);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("toast ", t_r2.type, "");
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.icon(t_r2.type))("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  toast = inject(ToastService);
  icon(t) {
    return t === "success" ? "check" : t === "error" ? "close" : t === "warning" ? "lowstock" : "bell";
  }
  static \u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "toasts"], [3, "class"], [3, "click"], [3, "name", "size"]], template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastContainerComponent_For_2_Template, 4, 6, "div", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toast.toasts());
    }
  }, dependencies: [IconComponent], styles: ["\n\n.toasts[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  z-index: 3000;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  color: #fff;\n  box-shadow: var(--shadow-lg);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  min-width: 240px;\n  max-width: 380px;\n  animation: toastIn 0.2s ease;\n}\n.toast.success[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.toast.error[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.toast.warning[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.toast.info[_ngcontent-%COMP%] {\n  background: var(--info);\n}\n/*# sourceMappingURL=toast-container.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src\\app\\shared\\ui\\toast-container.ts", lineNumber: 29 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toast-container")(2, "app-confirm-dialog");
    }
  }, dependencies: [RouterOutlet, ToastContainerComponent, ConfirmDialogComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
