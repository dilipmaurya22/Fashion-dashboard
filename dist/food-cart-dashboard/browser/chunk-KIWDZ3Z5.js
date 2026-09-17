import {
  AuthService
} from "./chunk-L3OMD2SC.js";
import {
  PaginatorComponent
} from "./chunk-HNFA2KHA.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MJGOFFBX.js";
import {
  ConfirmService
} from "./chunk-DNXBLQSG.js";
import {
  ToastService
} from "./chunk-3FQWZ3YU.js";
import {
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  CustomerService
} from "./chunk-WPCBNKZQ.js";
import {
  EmptyStateComponent,
  LoadingComponent,
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import {
  RouterLink
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  DatePipe,
  IconComponent,
  Subject,
  __async,
  debounceTime,
  distinctUntilChanged,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G5ETVSKB.js";

// src/app/features/customers/customers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/customers", a0];
function CustomersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function CustomersComponent_Conditional_15_Conditional_0_For_17_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_15_Conditional_0_For_17_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.remove(c_r3));
    });
    \u0275\u0275element(1, "app-icon", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
function CustomersComponent_Conditional_15_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 16)(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 2);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 17)(16, "a", 18);
    \u0275\u0275element(17, "app-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 20);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_15_Conditional_0_For_17_Template_button_click_18_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.edit(c_r3));
    });
    \u0275\u0275element(19, "app-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CustomersComponent_Conditional_15_Conditional_0_For_17_Conditional_20_Template, 2, 1, "button", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, c_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.mobileNumber || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.totalOrders);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, c_r3.totalSpent));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.lastOrderDate ? \u0275\u0275pipeBind2(14, 12, c_r3.lastOrderDate, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, c_r3.id));
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.canManage ? 20 : -1);
  }
}
function CustomersComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Last Order");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, CustomersComponent_Conditional_15_Conditional_0_For_17_Template, 21, 19, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "app-paginator", 14);
    \u0275\u0275listener("pageChange", function CustomersComponent_Conditional_15_Conditional_0_Template_app_paginator_pageChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(r_r6.items);
    \u0275\u0275advance(2);
    \u0275\u0275property("page", r_r6.page)("pageSize", r_r6.pageSize)("totalCount", r_r6.totalCount)("totalPages", r_r6.totalPages);
  }
}
function CustomersComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 11);
  }
}
function CustomersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomersComponent_Conditional_15_Conditional_0_Template, 19, 4)(1, CustomersComponent_Conditional_15_Conditional_1_Template, 1, 0, "app-empty-state", 11);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.items.length ? 0 : 1);
  }
}
function CustomersComponent_Conditional_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Enter a valid 10-digit mobile.");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_Conditional_16_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Enter a valid email.");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_Conditional_16_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 41);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function CustomersComponent_Conditional_16_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save ");
  }
}
function CustomersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalOpen.set(false));
    });
    \u0275\u0275element(6, "app-icon", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 30);
    \u0275\u0275listener("ngSubmit", function CustomersComponent_Conditional_16_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275elementStart(8, "div", 31)(9, "div", 32)(10, "label", 33);
    \u0275\u0275text(11, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 32)(14, "label", 33);
    \u0275\u0275text(15, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 35);
    \u0275\u0275template(17, CustomersComponent_Conditional_16_Conditional_17_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 32)(19, "label", 33);
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 37);
    \u0275\u0275template(22, CustomersComponent_Conditional_16_Conditional_22_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 38)(24, "button", 39);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_16_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalOpen.set(false));
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 40);
    \u0275\u0275template(27, CustomersComponent_Conditional_16_Conditional_27_Template, 1, 1, "app-spinner", 41)(28, CustomersComponent_Conditional_16_Conditional_28_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.editId() ? "Edit" : "Add", " Customer");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r3.form.controls.name.touched && ctx_r3.form.controls.name.invalid);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.form.controls.mobileNumber.touched && ctx_r3.form.controls.mobileNumber.invalid ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.form.controls.email.touched && ctx_r3.form.controls.email.invalid ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 27 : 28);
  }
}
var CustomersComponent = class _CustomersComponent {
  svc = inject(CustomerService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  loading = signal(true);
  result = signal(null);
  page = signal(1);
  search = signal("");
  searchSubject = new Subject();
  modalOpen = signal(false);
  editId = signal(null);
  saving = signal(false);
  form = this.fb.nonNullable.group({
    name: ["", Validators.required],
    mobileNumber: ["", Validators.pattern(/^\d{10}$/)],
    email: ["", Validators.email]
  });
  canManage = this.auth.hasRole("Admin", "Manager");
  constructor() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((v) => {
      this.search.set(v);
      this.page.set(1);
      this.load();
    });
    this.load();
  }
  load() {
    this.loading.set(true);
    this.svc.customers({ page: this.page(), pageSize: 15, search: this.search() }).subscribe({ next: (r) => {
      this.result.set(r);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  onSearch(v) {
    this.searchSubject.next(v);
  }
  goPage(p) {
    this.page.set(p);
    this.load();
  }
  add() {
    this.editId.set(null);
    this.form.reset({ name: "", mobileNumber: "", email: "" });
    this.modalOpen.set(true);
  }
  edit(c) {
    this.editId.set(c.id);
    this.form.reset({ name: c.name, mobileNumber: c.mobileNumber ?? "", email: c.email ?? "" });
    this.modalOpen.set(true);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.getRawValue();
    this.svc.save(this.editId(), { name: v.name, mobileNumber: v.mobileNumber || null, email: v.email || null }).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalOpen.set(false);
        this.toast.success("Customer saved.");
        this.load();
      },
      error: () => this.saving.set(false)
    });
  }
  remove(c) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({ title: "Delete customer?", message: `\u201C${c.name}\u201D will be removed.`, confirmText: "Delete", danger: true });
      if (!ok)
        return;
      this.svc.delete(c.id).subscribe({ next: () => {
        this.toast.success("Customer deleted.");
        this.load();
      } });
    });
  }
  static \u0275fac = function CustomersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "btn", "btn-primary", 3, "click"], ["name", "plus", 3, "size"], [1, "card"], [1, "filters"], [1, "search-box"], ["name", "search", 3, "size"], ["type", "text", "placeholder", "Search name or mobile\u2026", 3, "input"], [1, "modal-overlay"], ["icon", "customers", "title", "No customers yet", "message", "Add customers or they'll be created automatically at checkout."], [1, "table-wrap"], [1, "data"], [3, "pageChange", "page", "pageSize", "totalCount", "totalPages"], [1, "onum", 3, "routerLink"], [1, "mono"], [1, "row-actions"], [1, "ib", 3, "routerLink"], ["name", "eye", 3, "size"], [1, "ib", 3, "click"], ["name", "edit", 3, "size"], [1, "ib", "danger"], [1, "ib", "danger", 3, "click"], ["name", "trash", 3, "size"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "440px", 3, "click"], [1, "modal-head"], [1, "close-x", 3, "click"], ["name", "close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["formControlName", "name", 1, "form-control"], ["formControlName", "mobileNumber", "placeholder", "10 digits", 1, "form-control"], [1, "field-error"], ["formControlName", "email", 1, "form-control"], [1, "modal-foot"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "size"]], template: function CustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Your regulars and their order history");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function CustomersComponent_Template_button_click_6_listener() {
        return ctx.add();
      });
      \u0275\u0275element(7, "app-icon", 4);
      \u0275\u0275text(8, " Add Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "app-icon", 8);
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275listener("input", function CustomersComponent_Template_input_input_13_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, CustomersComponent_Conditional_14_Template, 1, 0, "app-loading")(15, CustomersComponent_Conditional_15_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, CustomersComponent_Conditional_16_Template, 29, 8, "div", 10);
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.result()) ? 15 : -1, tmp_3_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modalOpen() ? 16 : -1);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    IconComponent,
    MoneyPipe,
    LoadingComponent,
    EmptyStateComponent,
    SpinnerComponent,
    PaginatorComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src\\app\\features\\customers\\customers.component.ts", lineNumber: 23 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=chunk-KIWDZ3Z5.js.map
