import {
  AuthService
} from "./chunk-L3OMD2SC.js";
import {
  PaginatorComponent
} from "./chunk-HNFA2KHA.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  CatalogService,
  InventoryService
} from "./chunk-WPCBNKZQ.js";
import {
  EmptyStateComponent,
  LoadingComponent,
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  EventEmitter,
  IconComponent,
  Subject,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G5ETVSKB.js";

// src/app/features/food-items/food-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FoodFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7);
    \u0275\u0275element(2, "app-spinner");
    \u0275\u0275elementEnd()();
  }
}
function FoodFormComponent_Conditional_8_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function FoodFormComponent_Conditional_8_For_69_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", i_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r5.name);
  }
}
function FoodFormComponent_Conditional_8_For_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "select", 41)(2, "option", 15);
    \u0275\u0275text(3, "Select ingredient");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, FoodFormComponent_Conditional_8_For_69_For_5_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 42);
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 44);
    \u0275\u0275listener("click", function FoodFormComponent_Conditional_8_For_69_Template_button_click_9_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeRecipeRow($index_r6));
    });
    \u0275\u0275element(10, "app-icon", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const $index_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", $index_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ingredients());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.unitFor((tmp_14_0 = ctx_r1.recipe.at($index_r6).get("ingredientId")) == null ? null : tmp_14_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 15);
  }
}
function FoodFormComponent_Conditional_8_ForEmpty_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "No ingredients linked. Add them so inventory deducts automatically on sale.");
    \u0275\u0275elementEnd();
  }
}
function FoodFormComponent_Conditional_8_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function FoodFormComponent_Conditional_8_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save Food Item ");
  }
}
function FoodFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275listener("ngSubmit", function FoodFormComponent_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 9)(3, "div", 10)(4, "label", 11);
    \u0275\u0275text(5, "Food Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "label", 11);
    \u0275\u0275text(9, "SKU / Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "label", 11);
    \u0275\u0275text(14, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 14)(16, "option", 15);
    \u0275\u0275text(17, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, FoodFormComponent_Conditional_8_For_19_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "label", 11);
    \u0275\u0275text(22, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10)(25, "label", 11);
    \u0275\u0275text(26, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "textarea", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 10)(30, "label", 11);
    \u0275\u0275text(31, "Selling Price *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 10)(34, "label", 11);
    \u0275\u0275text(35, "Packaging Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10)(38, "label", 11);
    \u0275\u0275text(39, "Other Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 19)(42, "div", 10)(43, "label", 11);
    \u0275\u0275text(44, "Tax %");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 10)(47, "label", 11);
    \u0275\u0275text(48, "Prep Time (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 10)(51, "label", 11);
    \u0275\u0275text(52, "Base Cost (no recipe)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 26)(55, "label", 27);
    \u0275\u0275element(56, "input", 28);
    \u0275\u0275text(57, " Vegetarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "label", 27);
    \u0275\u0275element(59, "input", 29);
    \u0275\u0275text(60, " Available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 30)(62, "h4");
    \u0275\u0275text(63, "Recipe / Ingredients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 31);
    \u0275\u0275listener("click", function FoodFormComponent_Conditional_8_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRecipeRow());
    });
    \u0275\u0275element(65, "app-icon", 32);
    \u0275\u0275text(66, " Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 33);
    \u0275\u0275repeaterCreate(68, FoodFormComponent_Conditional_8_For_69_Template, 11, 4, "div", 34, \u0275\u0275repeaterTrackByIndex, false, FoodFormComponent_Conditional_8_ForEmpty_70_Template, 2, 0, "p", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 36)(72, "div")(73, "span", 35);
    \u0275\u0275text(74, "Total Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "b");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div")(78, "span", 35);
    \u0275\u0275text(79, "Profit Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "b");
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 37)(83, "button", 38);
    \u0275\u0275listener("click", function FoodFormComponent_Conditional_8_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelled.emit());
    });
    \u0275\u0275text(84, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 39);
    \u0275\u0275template(86, FoodFormComponent_Conditional_8_Conditional_86_Template, 1, 1, "app-spinner", 40)(87, FoodFormComponent_Conditional_8_Conditional_87_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("invalid", ctx_r1.form.controls.name.touched && ctx_r1.form.controls.name.invalid);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r1.form.controls.sku.touched && ctx_r1.form.controls.sku.invalid);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r1.form.controls.categoryId.touched && ctx_r1.form.controls.categoryId.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories());
    \u0275\u0275advance(14);
    \u0275\u0275classProp("invalid", ctx_r1.form.controls.sellingPrice.touched && ctx_r1.form.controls.sellingPrice.invalid);
    \u0275\u0275advance(33);
    \u0275\u0275property("size", 14);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.recipe.controls);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.totalCost().toFixed(2), "");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("pos", ctx_r1.margin() >= 0)("neg", ctx_r1.margin() < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.margin(), "%");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 86 : 87);
  }
}
var FoodFormComponent = class _FoodFormComponent {
  foodId = null;
  saved = new EventEmitter();
  cancelled = new EventEmitter();
  fb = inject(FormBuilder);
  catalog = inject(CatalogService);
  inventory = inject(InventoryService);
  toast = inject(ToastService);
  loading = signal(true);
  saving = signal(false);
  categories = signal([]);
  ingredients = signal([]);
  form = this.fb.nonNullable.group({
    name: ["", Validators.required],
    sku: ["", Validators.required],
    categoryId: [null, Validators.required],
    description: [""],
    imageUrl: [""],
    sellingPrice: [0, [Validators.required, Validators.min(0.01)]],
    costPrice: [0, Validators.min(0)],
    packagingCost: [0, Validators.min(0)],
    otherCost: [0, Validators.min(0)],
    taxPercent: [5, [Validators.min(0), Validators.max(100)]],
    isVeg: [true],
    preparationTimeMinutes: [5, Validators.min(0)],
    isAvailable: [true],
    recipe: this.fb.array([])
  });
  get recipe() {
    return this.form.get("recipe");
  }
  ngOnInit() {
    forkJoin({ cats: this.catalog.categories(), ings: this.inventory.allIngredients() }).subscribe(({ cats, ings }) => {
      this.categories.set(cats);
      this.ingredients.set(ings);
      if (this.foodId) {
        this.catalog.foodItem(this.foodId).subscribe((f) => {
          this.form.patchValue({
            name: f.name,
            sku: f.sku,
            categoryId: f.categoryId,
            description: f.description ?? "",
            imageUrl: f.imageUrl ?? "",
            sellingPrice: f.sellingPrice,
            costPrice: f.costPrice,
            packagingCost: f.packagingCost,
            otherCost: f.otherCost,
            taxPercent: f.taxPercent,
            isVeg: f.isVeg,
            preparationTimeMinutes: f.preparationTimeMinutes,
            isAvailable: f.isAvailable
          });
          f.recipe.forEach((r) => this.addRecipeRow(r.ingredientId, r.quantity));
          this.loading.set(false);
        });
      } else {
        this.loading.set(false);
      }
    });
  }
  addRecipeRow(ingredientId = null, quantity = 0) {
    this.recipe.push(this.fb.nonNullable.group({
      ingredientId: [ingredientId, Validators.required],
      quantity: [quantity, [Validators.required, Validators.min(1e-3)]]
    }));
  }
  removeRecipeRow(i) {
    this.recipe.removeAt(i);
  }
  unitFor(ingredientId) {
    return this.ingredients().find((i) => i.id === +ingredientId)?.unit ?? "";
  }
  // live profit preview
  ingredientCost = computed(() => 0);
  // replaced by method below (signals can't read form easily)
  calcIngredientCost() {
    return this.recipe.controls.reduce((sum, c) => {
      const ing = this.ingredients().find((i) => i.id === +c.get("ingredientId").value);
      return sum + (ing ? ing.costPerUnit * (+c.get("quantity").value || 0) : 0);
    }, 0);
  }
  totalCost() {
    const v = this.form.getRawValue();
    return this.calcIngredientCost() + (+v.packagingCost || 0) + (+v.otherCost || 0);
  }
  margin() {
    const price = +this.form.getRawValue().sellingPrice || 0;
    if (!price)
      return 0;
    return Math.round((price - this.totalCost()) / price * 100);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error("Please fix the form errors.");
      return;
    }
    this.saving.set(true);
    const v = this.form.getRawValue();
    const body = __spreadProps(__spreadValues({}, v), { recipe: v.recipe.map((r) => ({ ingredientId: +r.ingredientId, quantity: +r.quantity })) });
    this.catalog.saveFoodItem(this.foodId, body).subscribe({
      next: () => {
        this.saving.set(false);
        this.toast.success("Food item saved.");
        this.saved.emit();
      },
      error: () => this.saving.set(false)
    });
  }
  static \u0275fac = function FoodFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoodFormComponent, selectors: [["app-food-form"]], inputs: { foodId: "foodId" }, outputs: { saved: "saved", cancelled: "cancelled" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "modal-overlay", 3, "click"], [1, "modal", "wide", 3, "click"], [1, "modal-head"], [1, "close-x", 3, "click"], ["name", "close"], [1, "modal-body"], [3, "formGroup"], [1, "flex", 2, "justify-content", "center", "padding", "32px"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], [1, "form-label"], ["formControlName", "name", 1, "form-control"], ["formControlName", "sku", 1, "form-control"], ["formControlName", "categoryId", 1, "form-control"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["formControlName", "imageUrl", "placeholder", "https://\u2026", 1, "form-control"], ["rows", "2", "formControlName", "description", 1, "form-control"], [1, "grid-3"], ["type", "number", "step", "0.01", "formControlName", "sellingPrice", 1, "form-control"], ["type", "number", "step", "0.01", "formControlName", "packagingCost", 1, "form-control"], ["type", "number", "step", "0.01", "formControlName", "otherCost", 1, "form-control"], ["type", "number", "step", "0.01", "formControlName", "taxPercent", 1, "form-control"], ["type", "number", "formControlName", "preparationTimeMinutes", 1, "form-control"], ["type", "number", "step", "0.01", "formControlName", "costPrice", 1, "form-control"], [1, "toggles"], [1, "tg"], ["type", "checkbox", "formControlName", "isVeg"], ["type", "checkbox", "formControlName", "isAvailable"], [1, "recipe-head"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["name", "plus", 3, "size"], ["formArrayName", "recipe", 1, "recipe-rows"], [1, "recipe-row", 3, "formGroupName"], [1, "text-secondary", "text-small"], [1, "profit"], [1, "modal-foot"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "size"], ["formControlName", "ingredientId", 1, "form-control"], ["type", "number", "step", "0.001", "formControlName", "quantity", "placeholder", "Qty", 1, "form-control", "qty"], [1, "unit"], ["type", "button", 1, "ib", "danger", 3, "click"], ["name", "trash", 3, "size"]], template: function FoodFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function FoodFormComponent_Template_div_click_0_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function FoodFormComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h3");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function FoodFormComponent_Template_button_click_5_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275element(6, "app-icon", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, FoodFormComponent_Conditional_7_Template, 3, 0, "div", 5)(8, FoodFormComponent_Conditional_8_Template, 88, 20, "form", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.foodId ? "Edit Food Item" : "Add Food Item");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, IconComponent, SpinnerComponent], styles: ["\n\n.modal.wide[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n.grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.toggles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin: 4px 0 20px;\n}\n.tg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.tg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--orange);\n  width: 16px;\n  height: 16px;\n}\n.recipe-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 8px 0 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.recipe-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.recipe-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.recipe-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 100px 40px 34px;\n  gap: 8px;\n  align-items: center;\n}\n.recipe-row[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.unit[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.profit[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  margin-top: 18px;\n  padding: 14px 16px;\n  background: var(--bg);\n  border-radius: 10px;\n}\n.profit[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.profit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.profit[_ngcontent-%COMP%]   b.pos[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.profit[_ngcontent-%COMP%]   b.neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n@media (max-width: 640px) {\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .recipe-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 80px 30px 32px;\n  }\n}\n/*# sourceMappingURL=food-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoodFormComponent, { className: "FoodFormComponent", filePath: "src\\app\\features\\food-items\\food-form.component.ts", lineNumber: 18 });
})();

// src/app/features/food-items/food-items.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function FoodItemsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function FoodItemsComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275element(1, "app-icon", 16);
    \u0275\u0275text(2, " Add Food");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 18);
  }
}
function FoodItemsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function FoodItemsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function FoodItemsComponent_Conditional_32_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", f_r5.imageUrl, \u0275\u0275sanitizeUrl)("alt", f_r5.name);
  }
}
function FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 24);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "button", 34);
    \u0275\u0275listener("click", function FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const f_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.edit(f_r5));
    });
    \u0275\u0275element(2, "app-icon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 36);
    \u0275\u0275listener("click", function FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const f_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.remove(f_r5));
    });
    \u0275\u0275element(4, "app-icon", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function FoodItemsComponent_Conditional_32_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 21)(3, "div", 22);
    \u0275\u0275template(4, FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_4_Template, 1, 2, "img", 23)(5, FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_5_Template, 1, 1, "app-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 25)(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275element(11, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td")(15, "span", 29);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 30)(18, "b");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 31);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 32);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "span", 32);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, FoodItemsComponent_Conditional_32_Conditional_0_For_19_Conditional_30_Template, 5, 2, "td", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(f_r5.imageUrl ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(f_r5.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("nv", !f_r5.isVeg);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.categoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, f_r5.sellingPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 21, f_r5.totalCost));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", f_r5.profitMargin >= 40)("badge-warning", f_r5.profitMargin < 40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", f_r5.profitMargin, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", f_r5.isAvailable)("badge-danger", !f_r5.isAvailable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.isAvailable ? "Available" : "Unavailable");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManage ? 30 : -1);
  }
}
function FoodItemsComponent_Conditional_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, FoodItemsComponent_Conditional_32_Conditional_0_Conditional_16_Template, 1, 0, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, FoodItemsComponent_Conditional_32_Conditional_0_For_19_Template, 31, 23, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "app-paginator", 20);
    \u0275\u0275listener("pageChange", function FoodItemsComponent_Conditional_32_Conditional_0_Template_app_paginator_pageChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r1.canManage ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r7.items);
    \u0275\u0275advance(2);
    \u0275\u0275property("page", r_r7.page)("pageSize", r_r7.pageSize)("totalCount", r_r7.totalCount)("totalPages", r_r7.totalPages);
  }
}
function FoodItemsComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 17);
  }
}
function FoodItemsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FoodItemsComponent_Conditional_32_Conditional_0_Template, 21, 5)(1, FoodItemsComponent_Conditional_32_Conditional_1_Template, 1, 0, "app-empty-state", 17);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.items.length ? 0 : 1);
  }
}
function FoodItemsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-food-form", 38);
    \u0275\u0275listener("saved", function FoodItemsComponent_Conditional_33_Template_app_food_form_saved_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaved());
    })("cancelled", function FoodItemsComponent_Conditional_33_Template_app_food_form_cancelled_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("foodId", ctx_r1.editId());
  }
}
var FoodItemsComponent = class _FoodItemsComponent {
  catalog = inject(CatalogService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  auth = inject(AuthService);
  loading = signal(true);
  result = signal(null);
  categories = signal([]);
  page = signal(1);
  search = signal("");
  categoryId = signal("");
  isVeg = signal("");
  isAvailable = signal("");
  formOpen = signal(false);
  editId = signal(null);
  searchSubject = new Subject();
  canManage = this.auth.hasRole("Admin", "Manager");
  constructor() {
    this.catalog.categories().subscribe((c) => this.categories.set(c));
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((v) => {
      this.search.set(v);
      this.page.set(1);
      this.load();
    });
    this.load();
  }
  load() {
    this.loading.set(true);
    this.catalog.foodItems({
      page: this.page(),
      pageSize: 12,
      search: this.search(),
      categoryId: this.categoryId(),
      isVeg: this.isVeg(),
      isAvailable: this.isAvailable()
    }).subscribe({ next: (r) => {
      this.result.set(r);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  onSearch(v) {
    this.searchSubject.next(v);
  }
  changeFilter() {
    this.page.set(1);
    this.load();
  }
  goPage(p) {
    this.page.set(p);
    this.load();
  }
  add() {
    this.editId.set(null);
    this.formOpen.set(true);
  }
  edit(f) {
    this.editId.set(f.id);
    this.formOpen.set(true);
  }
  onSaved() {
    this.formOpen.set(false);
    this.load();
  }
  remove(f) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({ title: "Delete food item?", message: `\u201C${f.name}\u201D will be removed.`, confirmText: "Delete", danger: true });
      if (!ok)
        return;
      this.catalog.deleteFoodItem(f.id).subscribe({ next: () => {
        this.toast.success("Food item deleted.");
        this.load();
      } });
    });
  }
  static \u0275fac = function FoodItemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodItemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoodItemsComponent, selectors: [["app-food-items"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 8, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "btn", "btn-primary"], [1, "card"], [1, "filters"], [1, "search-box"], ["name", "search", 3, "size"], ["type", "text", "placeholder", "Search food item\u2026", 3, "input"], [1, "form-control", "filt", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "true"], ["value", "false"], [3, "foodId"], [1, "btn", "btn-primary", 3, "click"], ["name", "plus", 3, "size"], ["icon", "food", "title", "No food items", "message", "Add your first menu item to get started."], [1, "table-wrap"], [1, "data"], [3, "pageChange", "page", "pageSize", "totalCount", "totalPages"], [1, "fcell"], [1, "fthumb"], [3, "src", "alt"], ["name", "food", 3, "size"], [1, "flex", "items-center", "gap-8"], [1, "veg"], [1, "d"], [1, "text-secondary", "text-small"], [1, "badge", "badge-neutral"], [1, "mono"], [1, "mono", "text-secondary"], [1, "badge"], [1, "row-actions"], ["title", "Edit", 1, "ib", 3, "click"], ["name", "edit", 3, "size"], ["title", "Delete", 1, "ib", "danger", 3, "click"], ["name", "trash", 3, "size"], [3, "saved", "cancelled", "foodId"]], template: function FoodItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Food Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage your menu, pricing and recipes");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, FoodItemsComponent_Conditional_6_Template, 3, 1, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275element(10, "app-icon", 7);
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275listener("input", function FoodItemsComponent_Template_input_input_11_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "select", 9);
      \u0275\u0275listener("ngModelChange", function FoodItemsComponent_Template_select_ngModelChange_12_listener($event) {
        ctx.categoryId.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(13, "option", 10);
      \u0275\u0275text(14, "All Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(15, FoodItemsComponent_For_16_Template, 2, 2, "option", 11, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 9);
      \u0275\u0275listener("ngModelChange", function FoodItemsComponent_Template_select_ngModelChange_17_listener($event) {
        ctx.isVeg.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Veg & Non-Veg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "Veg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Non-Veg");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "select", 9);
      \u0275\u0275listener("ngModelChange", function FoodItemsComponent_Template_select_ngModelChange_24_listener($event) {
        ctx.isAvailable.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(25, "option", 10);
      \u0275\u0275text(26, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 12);
      \u0275\u0275text(28, "Available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 13);
      \u0275\u0275text(30, "Unavailable");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(31, FoodItemsComponent_Conditional_31_Template, 1, 0, "app-loading")(32, FoodItemsComponent_Conditional_32_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, FoodItemsComponent_Conditional_33_Template, 1, 1, "app-food-form", 14);
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.canManage ? 6 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.categoryId());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.isVeg());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.isAvailable());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.result()) ? 32 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formOpen() ? 33 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    MoneyPipe,
    LoadingComponent,
    EmptyStateComponent,
    PaginatorComponent,
    FoodFormComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoodItemsComponent, { className: "FoodItemsComponent", filePath: "src\\app\\features\\food-items\\food-items.component.ts", lineNumber: 23 });
})();
export {
  FoodItemsComponent
};
//# sourceMappingURL=chunk-VWGRFIBT.js.map
