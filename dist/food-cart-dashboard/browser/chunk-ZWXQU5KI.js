import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
  CatalogService
} from "./chunk-WPCBNKZQ.js";
import {
  EmptyStateComponent,
  LoadingComponent,
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import {
  CommonModule,
  IconComponent,
  __async,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G5ETVSKB.js";

// src/app/features/categories/categories.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CategoriesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function CategoriesComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "app-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "button", 16);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_10_For_2_Template_button_click_12_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.edit(c_r2));
    });
    \u0275\u0275element(13, "app-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_10_For_2_Template_button_click_14_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(c_r2));
    });
    \u0275\u0275element(15, "app-icon", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("name", c_r2.icon || "category")("size", 22);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-success", c_r2.isActive)("badge-neutral", !c_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r2.foodItemCount, " items \u2022 order ", c_r2.sortOrder, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function CategoriesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_10_For_2_Template, 16, 12, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.items());
  }
}
function CategoriesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-empty-state", 20);
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_Conditional_12_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 38);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function CategoriesComponent_Conditional_12_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save ");
  }
}
function CategoriesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modalOpen.set(false));
    });
    \u0275\u0275element(6, "app-icon", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 26);
    \u0275\u0275listener("ngSubmit", function CategoriesComponent_Conditional_12_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(8, "div", 27)(9, "div", 28)(10, "label", 29);
    \u0275\u0275text(11, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 31)(14, "div", 28)(15, "label", 29);
    \u0275\u0275text(16, "Sort Order");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 28)(19, "label", 29);
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 33);
    \u0275\u0275element(22, "input", 34);
    \u0275\u0275text(23, " Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 35)(25, "button", 36);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_12_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modalOpen.set(false));
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 37);
    \u0275\u0275template(28, CategoriesComponent_Conditional_12_Conditional_28_Template, 1, 1, "app-spinner", 38)(29, CategoriesComponent_Conditional_12_Conditional_29_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.editId() ? "Edit" : "Add", " Category");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r2.form.controls.name.touched && ctx_r2.form.controls.name.invalid);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 28 : 29);
  }
}
var CategoriesComponent = class _CategoriesComponent {
  catalog = inject(CatalogService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  fb = inject(FormBuilder);
  loading = signal(true);
  items = signal([]);
  modalOpen = signal(false);
  editId = signal(null);
  saving = signal(false);
  form = this.fb.nonNullable.group({
    name: ["", Validators.required],
    icon: ["category"],
    sortOrder: [0],
    isActive: [true]
  });
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.catalog.categories().subscribe({ next: (c) => {
      this.items.set(c);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  add() {
    this.editId.set(null);
    this.form.reset({ name: "", icon: "category", sortOrder: this.items().length + 1, isActive: true });
    this.modalOpen.set(true);
  }
  edit(c) {
    this.editId.set(c.id);
    this.form.reset({ name: c.name, icon: c.icon ?? "category", sortOrder: c.sortOrder, isActive: c.isActive });
    this.modalOpen.set(true);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.catalog.saveCategory(this.editId(), this.form.getRawValue()).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalOpen.set(false);
        this.toast.success("Category saved.");
        this.load();
      },
      error: () => this.saving.set(false)
    });
  }
  remove(c) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({ title: "Delete category?", message: `\u201C${c.name}\u201D will be removed.`, confirmText: "Delete", danger: true });
      if (!ok)
        return;
      this.catalog.deleteCategory(c.id).subscribe({ next: () => {
        this.toast.success("Category deleted.");
        this.load();
      } });
    });
  }
  static \u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 3, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "btn", "btn-primary", 3, "click"], ["name", "plus", 3, "size"], [1, "cat-grid"], [1, "card"], [1, "modal-overlay"], [1, "card", "cat-card"], [1, "cat-ic"], [3, "name", "size"], [1, "cat-body"], [1, "flex", "items-center", "gap-8"], [1, "badge"], [1, "text-secondary", "text-small"], [1, "row-actions"], [1, "ib", 3, "click"], ["name", "edit", 3, "size"], [1, "ib", "danger", 3, "click"], ["name", "trash", 3, "size"], ["icon", "category", "title", "No categories yet", "message", "Create your first menu category."], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "440px", 3, "click"], [1, "modal-head"], [1, "close-x", 3, "click"], ["name", "close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["formControlName", "name", 1, "form-control"], [1, "form-row"], ["type", "number", "formControlName", "sortOrder", 1, "form-control"], [1, "tg", 2, "margin-top", "10px"], ["type", "checkbox", "formControlName", "isActive"], [1, "modal-foot"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "size"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Organize your menu into sections");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_6_listener() {
        return ctx.add();
      });
      \u0275\u0275element(7, "app-icon", 4);
      \u0275\u0275text(8, " Add Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, CategoriesComponent_Conditional_9_Template, 1, 0, "app-loading")(10, CategoriesComponent_Conditional_10_Template, 3, 0, "div", 5)(11, CategoriesComponent_Conditional_11_Template, 2, 0, "div", 6)(12, CategoriesComponent_Conditional_12_Template, 30, 6, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 9 : ctx.items().length ? 10 : 11);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modalOpen() ? 12 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, IconComponent, LoadingComponent, EmptyStateComponent, SpinnerComponent], styles: ["\n\n.cat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.cat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n}\n.cat-ic[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 11px;\n  background: var(--orange-soft);\n  color: var(--orange-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.tg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.tg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--orange);\n  width: 16px;\n  height: 16px;\n}\n/*# sourceMappingURL=categories.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src\\app\\features\\categories\\categories.component.ts", lineNumber: 18 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-ZWXQU5KI.js.map
