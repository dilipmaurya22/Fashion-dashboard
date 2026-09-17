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
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MJGOFFBX.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-G5ETVSKB.js";

// src/app/features/settings/settings.component.ts
function SettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275element(1, "app-icon", 5);
    \u0275\u0275text(2, " Users & Roles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 18);
  }
}
function SettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function SettingsComponent_Conditional_8_Conditional_71_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 33);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function SettingsComponent_Conditional_8_Conditional_71_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save Settings ");
  }
}
function SettingsComponent_Conditional_8_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275template(2, SettingsComponent_Conditional_8_Conditional_71_Conditional_2_Template, 1, 1, "app-spinner", 33)(3, SettingsComponent_Conditional_8_Conditional_71_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 2 : 3);
  }
}
function SettingsComponent_Conditional_8_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Only an Admin can change business settings.");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "h3", 8);
    \u0275\u0275text(3, "Business Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10)(6, "label", 11);
    \u0275\u0275text(7, "Business Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10)(10, "label", 11);
    \u0275\u0275text(11, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "label", 11);
    \u0275\u0275text(15, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "label", 11);
    \u0275\u0275text(20, "GST Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10)(23, "label", 11);
    \u0275\u0275text(24, "FSSAI Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 10)(27, "label", 11);
    \u0275\u0275text(28, "Receipt Footer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 7)(31, "h3", 8);
    \u0275\u0275text(32, "Order & Pricing Defaults");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 18)(34, "div", 10)(35, "label", 11);
    \u0275\u0275text(36, "Currency Symbol *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 10)(39, "label", 11);
    \u0275\u0275text(40, "Default Tax %");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 10)(43, "label", 11);
    \u0275\u0275text(44, "Default Order Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 21)(46, "option", 22);
    \u0275\u0275text(47, "Dine-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 23);
    \u0275\u0275text(49, "Takeaway");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 24);
    \u0275\u0275text(51, "Parcel");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "div", 7)(53, "h3", 8);
    \u0275\u0275text(54, "Inventory Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 9)(56, "div", 10)(57, "label", 11);
    \u0275\u0275text(58, "Low Stock Threshold (global)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 10)(61, "label", 11);
    \u0275\u0275text(62, "Deduct Inventory When Order Is");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "select", 26)(64, "option", 27);
    \u0275\u0275text(65, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 28);
    \u0275\u0275text(67, "Preparing");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "label", 29);
    \u0275\u0275element(69, "input", 30);
    \u0275\u0275text(70, " Allow stock to go negative");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(71, SettingsComponent_Conditional_8_Conditional_71_Template, 4, 2, "div", 31)(72, SettingsComponent_Conditional_8_Conditional_72_Template, 2, 0, "p", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(71);
    \u0275\u0275conditional(ctx_r1.isAdmin ? 71 : 72);
  }
}
var SettingsComponent = class _SettingsComponent {
  svc = inject(SettingsService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  loading = signal(true);
  saving = signal(false);
  isAdmin = this.auth.hasRole("Admin");
  form = this.fb.nonNullable.group({
    businessName: ["", Validators.required],
    address: [""],
    mobileNumber: [""],
    gstNumber: [""],
    fssaiNumber: [""],
    receiptFooter: [""],
    currencySymbol: ["\u20B9", Validators.required],
    defaultTaxPercent: [0, [Validators.min(0), Validators.max(100)]],
    defaultOrderType: ["Takeaway"],
    lowStockThreshold: [0, Validators.min(0)],
    deductionTrigger: ["OnCompleted"],
    allowNegativeStock: [false],
    logoUrl: [""]
  });
  constructor() {
    this.svc.get().subscribe({
      next: (s) => {
        this.form.patchValue(s);
        this.loading.set(false);
        if (!this.isAdmin)
          this.form.disable();
      },
      error: () => this.loading.set(false)
    });
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.svc.update(this.form.getRawValue()).subscribe({
      next: () => {
        this.saving.set(false);
        this.toast.success("Settings saved.");
      },
      error: () => this.saving.set(false)
    });
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], ["routerLink", "/settings/users", 1, "btn", "btn-secondary"], [3, "formGroup"], ["name", "users", 3, "size"], [3, "ngSubmit", "formGroup"], [1, "card", "card-pad", "mb-16"], [1, "section-title", "mb-16"], [1, "form-row"], [1, "form-group"], [1, "form-label"], ["formControlName", "businessName", 1, "form-control"], ["formControlName", "mobileNumber", 1, "form-control"], ["formControlName", "address", 1, "form-control"], ["formControlName", "gstNumber", 1, "form-control"], ["formControlName", "fssaiNumber", 1, "form-control"], ["formControlName", "receiptFooter", 1, "form-control"], [1, "grid-3"], ["formControlName", "currencySymbol", 1, "form-control"], ["type", "number", "step", "0.01", "formControlName", "defaultTaxPercent", 1, "form-control"], ["formControlName", "defaultOrderType", 1, "form-control"], ["value", "DineIn"], ["value", "Takeaway"], ["value", "Parcel"], ["type", "number", "step", "0.001", "formControlName", "lowStockThreshold", 1, "form-control"], ["formControlName", "deductionTrigger", 1, "form-control"], ["value", "OnCompleted"], ["value", "OnPreparing"], [1, "tg"], ["type", "checkbox", "formControlName", "allowNegativeStock"], [1, "flex", 2, "justify-content", "flex-end"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "size"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Business Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Configure your cart, receipts and inventory rules");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, SettingsComponent_Conditional_6_Template, 3, 1, "a", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, SettingsComponent_Conditional_7_Template, 1, 0, "app-loading")(8, SettingsComponent_Conditional_8_Template, 73, 2, "form", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.isAdmin ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, IconComponent, LoadingComponent, SpinnerComponent], styles: ["\n\n.grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.tg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.tg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--orange);\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 720px) {\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\features\\settings\\settings.component.ts", lineNumber: 18 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-I5OSTLTR.js.map
