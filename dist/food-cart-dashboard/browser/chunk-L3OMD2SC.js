import {
  Router
} from "./chunk-YPNFZRGU.js";
import {
  ApiService,
  computed,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-G5ETVSKB.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "fc_token";
var USER_KEY = "fc_user";
var AuthService = class _AuthService {
  api = inject(ApiService);
  router = inject(Router);
  _user = signal(this.readUser());
  user = this._user.asReadonly();
  isLoggedIn = computed(() => !!this._user());
  role = computed(() => this._user()?.role ?? null);
  login(usernameOrEmail, password, rememberMe) {
    return this.api.post("/auth/login", { usernameOrEmail, password, rememberMe }).pipe(tap((res) => {
      localStorage.setItem(TOKEN_KEY, res.token);
      localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      this._user.set(res.user);
    }));
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  get token() {
    return localStorage.getItem(TOKEN_KEY);
  }
  hasRole(...roles) {
    const r = this._user()?.role;
    return !!r && roles.includes(r);
  }
  readUser() {
    const raw = localStorage.getItem(USER_KEY);
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-L3OMD2SC.js.map
