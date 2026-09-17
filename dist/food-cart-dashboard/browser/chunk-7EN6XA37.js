import {
  AuthService
} from "./chunk-L3OMD2SC.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MJGOFFBX.js";
import {
  ToastService
} from "./chunk-3FQWZ3YU.js";
import {
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import {
  Router
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  IconComponent,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/features/auth/login.component.ts
var _forTrack0 = ($index, $item) => $item.role;
function LoginComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 16);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function LoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Login ");
  }
}
function LoginComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function LoginComponent_For_33_Template_button_click_0_listener() {
      const a_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fill(a_r3.user, a_r3.pass));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.role);
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastService);
  loading = signal(false);
  error = signal(null);
  form = this.fb.nonNullable.group({
    usernameOrEmail: ["admin", Validators.required],
    password: ["Admin@123", Validators.required],
    rememberMe: [true]
  });
  demoAccounts = [
    { role: "Admin", user: "admin", pass: "Admin@123" },
    { role: "Manager", user: "manager", pass: "Manager@123" },
    { role: "Cashier", user: "cashier", pass: "Cashier@123" }
  ];
  fill(u, p) {
    this.form.patchValue({ usernameOrEmail: u, password: p });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const { usernameOrEmail, password, rememberMe } = this.form.getRawValue();
    this.auth.login(usernameOrEmail, password, rememberMe).subscribe({
      next: () => {
        this.toast.success("Welcome back!");
        this.router.navigate(["/dashboard"]);
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e.error?.message || "Invalid credentials.");
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 9, consts: [[1, "login-wrap"], [1, "login-card"], [1, "brand"], [1, "logo"], ["name", "food", 3, "size"], [1, "text-secondary"], [1, "welcome"], [3, "ngSubmit", "formGroup"], [1, "alert"], [1, "form-group"], [1, "form-label"], ["formControlName", "usernameOrEmail", "autocomplete", "username", 1, "form-control"], ["type", "password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], [1, "remember"], ["type", "checkbox", "formControlName", "rememberMe"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", 3, "disabled"], [3, "size"], [1, "demo"], [1, "text-secondary", "text-small"], [1, "chips"], ["type", "button", 1, "chip"], ["type", "button", 1, "chip", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275element(4, "app-icon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h1");
      \u0275\u0275text(7, "Food Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "Management System");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "h2", 6);
      \u0275\u0275text(11, "Sign in to your counter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 7);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
        return ctx.submit();
      });
      \u0275\u0275template(13, LoginComponent_Conditional_13_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16, "Email / Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9)(19, "label", 10);
      \u0275\u0275text(20, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "label", 13);
      \u0275\u0275element(23, "input", 14);
      \u0275\u0275text(24, " Remember me ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 15);
      \u0275\u0275template(26, LoginComponent_Conditional_26_Template, 1, 1, "app-spinner", 16)(27, LoginComponent_Conditional_27_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 17)(29, "span", 18);
      \u0275\u0275text(30, "Demo accounts \u2014 tap to fill:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 19);
      \u0275\u0275repeaterCreate(32, LoginComponent_For_33_Template, 2, 1, "button", 20, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 26);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 13 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.form.controls.usernameOrEmail.touched && ctx.form.controls.usernameOrEmail.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.form.controls.password.touched && ctx.form.controls.password.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 26 : 27);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.demoAccounts);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, IconComponent, SpinnerComponent], styles: ["\n\n.login-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background:\n    radial-gradient(\n      1000px 500px at 100% 0%,\n      rgba(249, 115, 22, 0.1),\n      transparent 60%),\n    radial-gradient(\n      800px 500px at 0% 100%,\n      rgba(249, 115, 22, 0.08),\n      transparent 55%),\n    var(--bg);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 32px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: var(--orange);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n}\n.brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 13px;\n}\n.welcome[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.alert[_ngcontent-%COMP%] {\n  background: var(--danger-soft);\n  color: var(--danger);\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.remember[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--orange);\n}\n.demo[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  padding-top: 18px;\n  border-top: 1px solid var(--border);\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n}\n.chip[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg);\n  color: var(--text);\n  transition: all 0.15s;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  color: var(--orange-dark);\n  background: var(--orange-soft);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-7EN6XA37.js.map
