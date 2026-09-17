import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MJGOFFBX.js";
import {
  ConfirmService
} from "./chunk-DNXBLQSG.js";
import {
  ToastService
} from "./chunk-3FQWZ3YU.js";
import {
  SettingsService
} from "./chunk-WPCBNKZQ.js";
import {
  LoadingComponent,
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import {
  RouterLink
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  IconComponent,
  __async,
  forkJoin,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G5ETVSKB.js";

// src/app/features/settings/users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UsersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function UsersComponent_Conditional_13_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 12)(15, "button", 13);
    \u0275\u0275listener("click", function UsersComponent_Conditional_13_For_18_Template_button_click_15_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.edit(u_r2));
    });
    \u0275\u0275element(16, "app-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 15);
    \u0275\u0275listener("click", function UsersComponent_Conditional_13_For_18_Template_button_click_17_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(u_r2));
    });
    \u0275\u0275element(18, "app-icon", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r2.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.roleClass(u_r2.role), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", u_r2.isActive)("badge-neutral", !u_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function UsersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, UsersComponent_Conditional_13_For_18_Template, 19, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.users());
  }
}
function UsersComponent_Conditional_14_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5);
  }
}
function UsersComponent_Conditional_14_Conditional_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Min 6 characters.");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_14_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "label", 25);
    \u0275\u0275text(2, "Password *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 37);
    \u0275\u0275template(4, UsersComponent_Conditional_14_Conditional_28_Conditional_4_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.form.controls.password.touched && ctx_r2.form.controls.password.invalid ? 4 : -1);
  }
}
function UsersComponent_Conditional_14_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 32);
    \u0275\u0275element(1, "input", 39);
    \u0275\u0275text(2, " Active");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_14_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 36);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function UsersComponent_Conditional_14_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save ");
  }
}
function UsersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modalOpen.set(false));
    });
    \u0275\u0275element(6, "app-icon", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 22);
    \u0275\u0275listener("ngSubmit", function UsersComponent_Conditional_14_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(8, "div", 23)(9, "div", 24)(10, "label", 25);
    \u0275\u0275text(11, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 27)(14, "div", 24)(15, "label", 25);
    \u0275\u0275text(16, "Username *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 24)(19, "label", 25);
    \u0275\u0275text(20, "Role *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 29);
    \u0275\u0275repeaterCreate(22, UsersComponent_Conditional_14_For_23_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 24)(25, "label", 25);
    \u0275\u0275text(26, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, UsersComponent_Conditional_14_Conditional_28_Template, 5, 1, "div", 24)(29, UsersComponent_Conditional_14_Conditional_29_Template, 3, 0, "label", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 33)(31, "button", 34);
    \u0275\u0275listener("click", function UsersComponent_Conditional_14_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modalOpen.set(false));
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 35);
    \u0275\u0275template(34, UsersComponent_Conditional_14_Conditional_34_Template, 1, 1, "app-spinner", 36)(35, UsersComponent_Conditional_14_Conditional_35_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.editId() ? "Edit" : "Add", " User");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.roles());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r2.editId() ? 28 : 29);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 34 : 35);
  }
}
var UsersComponent = class _UsersComponent {
  svc = inject(SettingsService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  fb = inject(FormBuilder);
  loading = signal(true);
  users = signal([]);
  roles = signal([]);
  modalOpen = signal(false);
  editId = signal(null);
  saving = signal(false);
  form = this.fb.nonNullable.group({
    fullName: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    username: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    role: ["Cashier", Validators.required],
    isActive: [true]
  });
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    forkJoin({ u: this.svc.users(), r: this.svc.roles() }).subscribe({
      next: ({ u, r }) => {
        this.users.set(u);
        this.roles.set(r);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  add() {
    this.editId.set(null);
    this.form.reset({ fullName: "", email: "", username: "", password: "", role: "Cashier", isActive: true });
    this.form.controls.password.enable();
    this.form.controls.username.enable();
    this.modalOpen.set(true);
  }
  edit(u) {
    this.editId.set(u.id);
    this.form.reset({ fullName: u.fullName, email: u.email, username: u.username, password: "unchanged", role: u.role, isActive: u.isActive });
    this.form.controls.password.disable();
    this.form.controls.username.disable();
    this.modalOpen.set(true);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.getRawValue();
    const req = this.editId() ? this.svc.saveUser(this.editId(), { fullName: v.fullName, email: v.email, role: v.role, isActive: v.isActive }) : this.svc.saveUser(null, { fullName: v.fullName, email: v.email, username: v.username, password: v.password, role: v.role });
    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.modalOpen.set(false);
        this.toast.success("User saved.");
        this.load();
      },
      error: () => this.saving.set(false)
    });
  }
  remove(u) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({ title: "Delete user?", message: `\u201C${u.fullName}\u201D will lose access.`, confirmText: "Delete", danger: true });
      if (!ok)
        return;
      this.svc.deleteUser(u.id).subscribe({ next: () => {
        this.toast.success("User deleted.");
        this.load();
      } });
    });
  }
  roleClass(r) {
    return r === "Admin" ? "badge-danger" : r === "Manager" ? "badge-warning" : "badge-info";
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [["routerLink", "/settings", 1, "back", 2, "display", "inline-flex", "align-items", "center", "gap", "4px", "color", "var(--text-secondary)", "font-weight", "600", "font-size", "13px", "margin-bottom", "16px"], ["name", "chevronDown", 2, "transform", "rotate(90deg)", 3, "size"], [1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "btn", "btn-primary", 3, "click"], ["name", "plus", 3, "size"], [1, "card"], [1, "modal-overlay"], [1, "table-wrap"], [1, "data"], [1, "badge"], [1, "row-actions"], [1, "ib", 3, "click"], ["name", "edit", 3, "size"], [1, "ib", "danger", 3, "click"], ["name", "trash", 3, "size"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "480px", 3, "click"], [1, "modal-head"], [1, "close-x", 3, "click"], ["name", "close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["formControlName", "fullName", 1, "form-control"], [1, "form-row"], ["formControlName", "username", 1, "form-control"], ["formControlName", "role", 1, "form-control"], [3, "value"], ["formControlName", "email", 1, "form-control"], [1, "tg", 2, "display", "flex", "align-items", "center", "gap", "8px", "font-size", "14px"], [1, "modal-foot"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "size"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "field-error"], ["type", "checkbox", "formControlName", "isActive", 2, "accent-color", "var(--orange)"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275element(1, "app-icon", 1);
      \u0275\u0275text(2, " Back to Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div")(5, "h1", 3);
      \u0275\u0275text(6, "Users & Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Manage who can access the system");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_9_listener() {
        return ctx.add();
      });
      \u0275\u0275element(10, "app-icon", 6);
      \u0275\u0275text(11, " Add User");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, UsersComponent_Conditional_12_Template, 1, 0, "app-loading")(13, UsersComponent_Conditional_13_Template, 19, 0, "div", 7)(14, UsersComponent_Conditional_14_Template, 36, 5, "div", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(9);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 12 : 13);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modalOpen() ? 14 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, IconComponent, LoadingComponent, SpinnerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\features\\settings\\users.component.ts", lineNumber: 19 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-6NAEXXSV.js.map
