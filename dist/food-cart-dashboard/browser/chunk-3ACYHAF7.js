import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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
  MoneyPipe
} from "./chunk-GZ7DPFPQ.js";
import {
  InventoryService
} from "./chunk-WPCBNKZQ.js";
import {
  SpinnerComponent
} from "./chunk-ZBQMMIGL.js";
import {
  Router,
  RouterLink
} from "./chunk-YPNFZRGU.js";
import {
  CommonModule,
  IconComponent,
  forkJoin,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/features/inventory/stock-in.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StockInComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.name);
  }
}
function StockInComponent_For_52_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
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
function StockInComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 22)(1, "td")(2, "select", 27);
    \u0275\u0275listener("change", function StockInComponent_For_52_Template_select_change_2_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPickIngredient($index_r3));
    });
    \u0275\u0275elementStart(3, "option", 28);
    \u0275\u0275text(4, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, StockInComponent_For_52_For_6_Template, 2, 2, "option", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 4);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 31)(14, "b");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "button", 32);
    \u0275\u0275listener("click", function StockInComponent_For_52_Template_button_click_18_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeRow($index_r3));
    });
    \u0275\u0275element(19, "app-icon", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const $index_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", $index_r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.ingredients());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.unitFor((tmp_13_0 = ctx_r3.items.at($index_r3).get("ingredientId")) == null ? null : tmp_13_0.value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 5, ctx_r3.lineTotal($index_r3)));
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 15);
  }
}
function StockInComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 26);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function StockInComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 34);
    \u0275\u0275text(1, " Add Stock ");
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
var StockInComponent = class _StockInComponent {
  inv = inject(InventoryService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  router = inject(Router);
  ingredients = signal([]);
  suppliers = signal([]);
  saving = signal(false);
  form = this.fb.nonNullable.group({
    supplierId: [null],
    invoiceNumber: [""],
    notes: [""],
    items: this.fb.array([])
  });
  get items() {
    return this.form.get("items");
  }
  constructor() {
    forkJoin({ ings: this.inv.allIngredients(), sups: this.inv.suppliers() }).subscribe(({ ings, sups }) => {
      this.ingredients.set(ings);
      this.suppliers.set(sups);
      this.addRow();
    });
  }
  addRow() {
    this.items.push(this.fb.nonNullable.group({
      ingredientId: [null, Validators.required],
      quantity: [0, [Validators.required, Validators.min(1e-3)]],
      costPerUnit: [0, [Validators.required, Validators.min(0)]]
    }));
  }
  removeRow(i) {
    this.items.removeAt(i);
  }
  unitFor(id) {
    return this.ingredients().find((x) => x.id === +id)?.unit ?? "";
  }
  lineTotal(i) {
    const c = this.items.at(i).getRawValue();
    return (+c.quantity || 0) * (+c.costPerUnit || 0);
  }
  grandTotal() {
    return this.items.controls.reduce((s, _, i) => s + this.lineTotal(i), 0);
  }
  onPickIngredient(i) {
    const id = this.items.at(i).get("ingredientId").value;
    const ing = this.ingredients().find((x) => x.id === +id);
    if (ing && !this.items.at(i).get("costPerUnit").value)
      this.items.at(i).patchValue({ costPerUnit: ing.costPerUnit });
  }
  submit() {
    if (this.form.invalid || !this.items.length) {
      this.form.markAllAsTouched();
      this.toast.error("Add at least one valid item.");
      return;
    }
    this.saving.set(true);
    const v = this.form.getRawValue();
    const body = {
      supplierId: v.supplierId,
      invoiceNumber: v.invoiceNumber,
      notes: v.notes,
      purchaseDate: null,
      items: v.items.map((r) => ({ ingredientId: +r.ingredientId, quantity: +r.quantity, costPerUnit: +r.costPerUnit }))
    };
    this.inv.stockIn(body).subscribe({
      next: () => {
        this.saving.set(false);
        this.toast.success("Stock added to inventory.");
        this.router.navigate(["/inventory"]);
      },
      error: () => this.saving.set(false)
    });
  }
  static \u0275fac = function StockInComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockInComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockInComponent, selectors: [["app-stock-in"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 9, consts: [["routerLink", "/inventory", 1, "back"], ["name", "chevronDown", 2, "transform", "rotate(90deg)", 3, "size"], [1, "page-head"], [1, "page-title"], [1, "text-secondary"], [3, "ngSubmit", "formGroup"], [1, "card", "card-pad", "mb-16"], [1, "grid-3"], [1, "form-group"], [1, "form-label"], ["formControlName", "supplierId", 1, "form-control"], [3, "ngValue"], ["formControlName", "invoiceNumber", 1, "form-control"], ["formControlName", "notes", 1, "form-control"], [1, "card"], [1, "card-pad", "flex", "justify-between", "items-center"], [1, "section-title"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["name", "plus", 3, "size"], [1, "table-wrap"], [1, "data"], ["formArrayName", "items"], [3, "formGroupName"], [1, "foot"], [1, "grand"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "size"], ["formControlName", "ingredientId", 1, "form-control", 3, "change"], ["disabled", "", 3, "ngValue"], ["type", "number", "step", "0.001", "formControlName", "quantity", 1, "form-control", "sm"], ["type", "number", "step", "0.0001", "formControlName", "costPerUnit", 1, "form-control", "sm"], [1, "mono"], ["type", "button", 1, "ib", "danger", 3, "click"], ["name", "trash", 3, "size"], ["name", "stockin", 3, "size"]], template: function StockInComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275element(1, "app-icon", 1);
      \u0275\u0275text(2, " Back to Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div")(5, "h1", 3);
      \u0275\u0275text(6, "Stock In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Record a purchase \u2014 inventory increases automatically");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "form", 5);
      \u0275\u0275listener("ngSubmit", function StockInComponent_Template_form_ngSubmit_9_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "label", 9);
      \u0275\u0275text(14, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 10)(16, "option", 11);
      \u0275\u0275text(17, "\u2014 None \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(18, StockInComponent_For_19_Template, 2, 2, "option", 11, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "label", 9);
      \u0275\u0275text(22, "Invoice Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "label", 9);
      \u0275\u0275text(26, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 14)(29, "div", 15)(30, "h3", 16);
      \u0275\u0275text(31, "Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 17);
      \u0275\u0275listener("click", function StockInComponent_Template_button_click_32_listener() {
        return ctx.addRow();
      });
      \u0275\u0275element(33, "app-icon", 18);
      \u0275\u0275text(34, " Add Item");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 19)(36, "table", 20)(37, "thead")(38, "tr")(39, "th");
      \u0275\u0275text(40, "Ingredient");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th");
      \u0275\u0275text(46, "Cost / Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48, "Line Total");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "tbody", 21);
      \u0275\u0275repeaterCreate(51, StockInComponent_For_52_Template, 20, 7, "tr", 22, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 23)(54, "div", 24);
      \u0275\u0275text(55, "Total: ");
      \u0275\u0275elementStart(56, "b");
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "button", 25);
      \u0275\u0275template(60, StockInComponent_Conditional_60_Template, 1, 1, "app-spinner", 26)(61, StockInComponent_Conditional_61_Template, 2, 1);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.suppliers());
      \u0275\u0275advance(15);
      \u0275\u0275property("size", 14);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.items.controls);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 7, ctx.grandTotal()));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 60 : 61);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, RouterLink, IconComponent, MoneyPipe, SpinnerComponent], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: var(--orange-dark);\n}\n.grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.form-control.sm[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n}\ntable.data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n}\n.foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-top: 1px solid var(--border);\n}\n.grand[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.grand[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 6px;\n}\n@media (max-width: 720px) {\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=stock-in.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockInComponent, { className: "StockInComponent", filePath: "src\\app\\features\\inventory\\stock-in.component.ts", lineNumber: 20 });
})();
export {
  StockInComponent
};
//# sourceMappingURL=chunk-3ACYHAF7.js.map
