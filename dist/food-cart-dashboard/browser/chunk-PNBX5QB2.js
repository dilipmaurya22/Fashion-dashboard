import {
  StockStatusBadge
} from "./chunk-LKDZDIXN.js";
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
  InventoryService
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
  IconComponent,
  Subject,
  __async,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G5ETVSKB.js";

// src/app/features/inventory/inventory.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ["g", "kg", "ml", "l", "piece"];
function InventoryComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
function InventoryComponent_Conditional_28_Conditional_0_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 23)(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 2);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 23);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 23)(17, "b");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275element(21, "app-stock-status", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 26)(23, "button", 27);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_28_Conditional_0_For_21_Template_button_click_23_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openAdjust(i_r3));
    });
    \u0275\u0275element(24, "app-icon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 29);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_28_Conditional_0_For_21_Template_button_click_25_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.edit(i_r3));
    });
    \u0275\u0275element(26, "app-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 31);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_28_Conditional_0_For_21_Template_button_click_27_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.remove(i_r3));
    });
    \u0275\u0275element(28, "app-icon", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r3.currentStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", i_r3.minimumStock, " ", i_r3.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(15, 12, i_r3.costPerUnit, "\u20B9", 2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, i_r3.stockValue));
    \u0275\u0275advance(3);
    \u0275\u0275property("status", i_r3.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function InventoryComponent_Conditional_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 21)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Ingredient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Cost/Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Stock Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, InventoryComponent_Conditional_28_Conditional_0_For_21_Template, 29, 18, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "app-paginator", 22);
    \u0275\u0275listener("pageChange", function InventoryComponent_Conditional_28_Conditional_0_Template_app_paginator_pageChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(r_r5.items);
    \u0275\u0275advance(2);
    \u0275\u0275property("page", r_r5.page)("pageSize", r_r5.pageSize)("totalCount", r_r5.totalCount)("totalPages", r_r5.totalPages);
  }
}
function InventoryComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 19);
  }
}
function InventoryComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InventoryComponent_Conditional_28_Conditional_0_Template, 23, 4)(1, InventoryComponent_Conditional_28_Conditional_1_Template, 1, 0, "app-empty-state", 19);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.items.length ? 0 : 1);
  }
}
function InventoryComponent_Conditional_29_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    \u0275\u0275property("value", u_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r7);
  }
}
function InventoryComponent_Conditional_29_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1, "Use Stock In or Adjust to change current stock.");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_Conditional_29_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 54);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function InventoryComponent_Conditional_29_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save ");
  }
}
function InventoryComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.formOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_29_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 35)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.formOpen.set(false));
    });
    \u0275\u0275element(6, "app-icon", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 38);
    \u0275\u0275listener("ngSubmit", function InventoryComponent_Conditional_29_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 40)(10, "div", 41)(11, "label", 42);
    \u0275\u0275text(12, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 41)(15, "label", 42);
    \u0275\u0275text(16, "SKU *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 40)(19, "div", 41)(20, "label", 42);
    \u0275\u0275text(21, "Unit *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 45);
    \u0275\u0275repeaterCreate(23, InventoryComponent_Conditional_29_For_24_Template, 2, 2, "option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 41)(26, "label", 42);
    \u0275\u0275text(27, "Cost / Unit *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 40)(30, "div", 41)(31, "label", 42);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 41)(35, "label", 42);
    \u0275\u0275text(36, "Minimum Stock *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, InventoryComponent_Conditional_29_Conditional_38_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 51)(40, "button", 52);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_29_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.formOpen.set(false));
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 53);
    \u0275\u0275template(43, InventoryComponent_Conditional_29_Conditional_43_Template, 1, 1, "app-spinner", 54)(44, InventoryComponent_Conditional_29_Conditional_44_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.editId() ? "Edit" : "Add", " Ingredient");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.editId() ? "Current Stock (read-only)" : "Opening Stock");
    \u0275\u0275advance();
    \u0275\u0275property("readonly", !!ctx_r3.editId());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.editId() ? 38 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 43 : 44);
  }
}
function InventoryComponent_Conditional_30_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275property("value", r_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9);
  }
}
function InventoryComponent_Conditional_30_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 54);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function InventoryComponent_Conditional_30_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Apply Adjustment ");
  }
}
function InventoryComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.adjustOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_30_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 35)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.adjustOpen.set(false));
    });
    \u0275\u0275element(6, "app-icon", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 38);
    \u0275\u0275listener("ngSubmit", function InventoryComponent_Conditional_30_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitAdjust());
    });
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 56);
    \u0275\u0275text(10, "Current: ");
    \u0275\u0275elementStart(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 41)(14, "label", 42);
    \u0275\u0275text(15, "Adjustment (use negative to reduce)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 41)(18, "label", 42);
    \u0275\u0275text(19, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 58);
    \u0275\u0275repeaterCreate(21, InventoryComponent_Conditional_30_For_22_Template, 2, 2, "option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 41)(24, "label", 42);
    \u0275\u0275text(25, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 60);
    \u0275\u0275text(28, "New stock: ");
    \u0275\u0275elementStart(29, "b");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 51)(32, "button", 52);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_30_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.adjustOpen.set(false));
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 53);
    \u0275\u0275template(35, InventoryComponent_Conditional_30_Conditional_35_Template, 1, 1, "app-spinner", 54)(36, InventoryComponent_Conditional_30_Conditional_36_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Adjust Stock \u2014 ", (tmp_1_0 = ctx_r3.adjustTarget()) == null ? null : tmp_1_0.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.adjustForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (tmp_3_0 = ctx_r3.adjustTarget()) == null ? null : tmp_3_0.currentStock, " ", (tmp_3_0 = ctx_r3.adjustTarget()) == null ? null : tmp_3_0.unit, "");
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r3.reasons);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r3.newStockPreview(), " ", (tmp_5_0 = ctx_r3.adjustTarget()) == null ? null : tmp_5_0.unit, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.adjusting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.adjusting() ? 35 : 36);
  }
}
var InventoryComponent = class _InventoryComponent {
  inv = inject(InventoryService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  fb = inject(FormBuilder);
  loading = signal(true);
  result = signal(null);
  page = signal(1);
  search = signal("");
  status = signal("");
  searchSubject = new Subject();
  // ingredient add/edit modal
  formOpen = signal(false);
  editId = signal(null);
  saving = signal(false);
  form = this.fb.nonNullable.group({
    name: ["", Validators.required],
    sku: ["", Validators.required],
    unit: ["g", Validators.required],
    currentStock: [0, Validators.min(0)],
    minimumStock: [0, Validators.min(0)],
    costPerUnit: [0, Validators.min(0)]
  });
  // adjustment modal
  adjustOpen = signal(false);
  adjusting = signal(false);
  adjustTarget = signal(null);
  adjustForm = this.fb.nonNullable.group({
    quantityChange: [0, Validators.required],
    reason: ["Wastage", Validators.required],
    notes: [""]
  });
  reasons = ["Damaged", "Wastage", "Expired", "ManualCorrection", "FreeSample", "Other"];
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
    this.inv.ingredients({ page: this.page(), pageSize: 12, search: this.search(), status: this.status() }).subscribe({ next: (r) => {
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
    this.form.reset({ name: "", sku: "", unit: "g", currentStock: 0, minimumStock: 0, costPerUnit: 0 });
    this.formOpen.set(true);
  }
  edit(i) {
    this.editId.set(i.id);
    this.form.reset({ name: i.name, sku: i.sku, unit: i.unit, currentStock: i.currentStock, minimumStock: i.minimumStock, costPerUnit: i.costPerUnit });
    this.formOpen.set(true);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.inv.saveIngredient(this.editId(), this.form.getRawValue()).subscribe({
      next: () => {
        this.saving.set(false);
        this.formOpen.set(false);
        this.toast.success("Ingredient saved.");
        this.load();
      },
      error: () => this.saving.set(false)
    });
  }
  openAdjust(i) {
    this.adjustTarget.set(i);
    this.adjustForm.reset({ quantityChange: 0, reason: "Wastage", notes: "" });
    this.adjustOpen.set(true);
  }
  submitAdjust() {
    const t = this.adjustTarget();
    if (!t)
      return;
    this.adjusting.set(true);
    this.inv.adjust(__spreadValues({ ingredientId: t.id }, this.adjustForm.getRawValue())).subscribe({
      next: () => {
        this.adjusting.set(false);
        this.adjustOpen.set(false);
        this.toast.success("Stock adjusted.");
        this.load();
      },
      error: () => this.adjusting.set(false)
    });
  }
  newStockPreview() {
    const t = this.adjustTarget();
    if (!t)
      return 0;
    return t.currentStock + (+this.adjustForm.getRawValue().quantityChange || 0);
  }
  remove(i) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({ title: "Delete ingredient?", message: `\u201C${i.name}\u201D will be removed.`, confirmText: "Delete", danger: true });
      if (!ok)
        return;
      this.inv.deleteIngredient(i.id).subscribe({ next: () => {
        this.toast.success("Ingredient deleted.");
        this.load();
      } });
    });
  }
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 8, consts: [[1, "page-head"], [1, "page-title"], [1, "text-secondary"], [1, "flex", "gap-8"], ["routerLink", "/inventory/stock-in", 1, "btn", "btn-secondary"], ["name", "stockin", 3, "size"], [1, "btn", "btn-primary", 3, "click"], ["name", "plus", 3, "size"], [1, "card"], [1, "filters"], [1, "search-box"], ["name", "search", 3, "size"], ["type", "text", "placeholder", "Search ingredient or SKU\u2026", 3, "input"], [1, "form-control", "filt", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Available"], ["value", "Low Stock"], ["value", "Out of Stock"], [1, "modal-overlay"], ["icon", "inventory", "title", "No ingredients", "message", "Add ingredients to track your stock."], [1, "table-wrap"], [1, "data"], [3, "pageChange", "page", "pageSize", "totalCount", "totalPages"], [1, "mono"], [1, "mono", "text-secondary"], [3, "status"], [1, "row-actions"], ["title", "Adjust", 1, "ib", 3, "click"], ["name", "adjust", 3, "size"], ["title", "Edit", 1, "ib", 3, "click"], ["name", "edit", 3, "size"], ["title", "Delete", 1, "ib", "danger", 3, "click"], ["name", "trash", 3, "size"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "480px", 3, "click"], [1, "modal-head"], [1, "close-x", 3, "click"], ["name", "close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-row"], [1, "form-group"], [1, "form-label"], ["formControlName", "name", 1, "form-control"], ["formControlName", "sku", 1, "form-control"], ["formControlName", "unit", 1, "form-control"], [3, "value"], ["type", "number", "step", "0.0001", "formControlName", "costPerUnit", 1, "form-control"], ["type", "number", "step", "0.001", "formControlName", "currentStock", 1, "form-control", 3, "readonly"], ["type", "number", "step", "0.001", "formControlName", "minimumStock", 1, "form-control"], [1, "text-secondary", "text-small"], [1, "modal-foot"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "size"], [1, "modal", 2, "max-width", "440px", 3, "click"], [1, "adj-cur"], ["type", "number", "step", "0.001", "formControlName", "quantityChange", 1, "form-control"], ["formControlName", "reason", 1, "form-control"], ["formControlName", "notes", 1, "form-control"], [1, "adj-preview"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Track ingredient stock levels and value");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "a", 4);
      \u0275\u0275element(8, "app-icon", 5);
      \u0275\u0275text(9, " Stock In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function InventoryComponent_Template_button_click_10_listener() {
        return ctx.add();
      });
      \u0275\u0275element(11, "app-icon", 7);
      \u0275\u0275text(12, " Add Ingredient");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10);
      \u0275\u0275element(16, "app-icon", 11);
      \u0275\u0275elementStart(17, "input", 12);
      \u0275\u0275listener("input", function InventoryComponent_Template_input_input_17_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "select", 13);
      \u0275\u0275listener("ngModelChange", function InventoryComponent_Template_select_ngModelChange_18_listener($event) {
        ctx.status.set($event);
        return ctx.changeFilter();
      });
      \u0275\u0275elementStart(19, "option", 14);
      \u0275\u0275text(20, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 15);
      \u0275\u0275text(22, "Available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 16);
      \u0275\u0275text(24, "Low Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 17);
      \u0275\u0275text(26, "Out of Stock");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, InventoryComponent_Conditional_27_Template, 1, 0, "app-loading")(28, InventoryComponent_Conditional_28_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, InventoryComponent_Conditional_29_Template, 45, 8, "div", 18)(30, InventoryComponent_Conditional_30_Template, 37, 8, "div", 18);
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.status());
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_5_0 = ctx.result()) ? 28 : -1, tmp_5_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formOpen() ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.adjustOpen() ? 30 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    IconComponent,
    MoneyPipe,
    StockStatusBadge,
    LoadingComponent,
    EmptyStateComponent,
    SpinnerComponent,
    PaginatorComponent
  ], styles: ["\n\n.adj-cur[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: var(--bg);\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.adj-preview[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: var(--orange-soft);\n  color: var(--orange-dark);\n  border-radius: 8px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=inventory.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src\\app\\features\\inventory\\inventory.component.ts", lineNumber: 24 });
})();
export {
  InventoryComponent
};
//# sourceMappingURL=chunk-PNBX5QB2.js.map
