import {
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/shared/ui/confirm.ts
function ConfirmDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.answer(false));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.answer(false));
    });
    \u0275\u0275text(8, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.answer(true));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.message);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-danger", p_r3.danger)("btn-primary", !p_r3.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.confirmText || "Confirm");
  }
}
var ConfirmService = class _ConfirmService {
  pending = signal(null);
  ask(options) {
    return new Promise((resolve) => this.pending.set(__spreadProps(__spreadValues({}, options), { resolve })));
  }
  answer(value) {
    const p = this.pending();
    if (p) {
      p.resolve(value);
      this.pending.set(null);
    }
  }
  static \u0275fac = function ConfirmService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmService, factory: _ConfirmService.\u0275fac, providedIn: "root" });
};
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  svc = inject(ConfirmService);
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "overlay"], [1, "overlay", 3, "click"], [1, "box", 3, "click"], [1, "text-secondary"], [1, "actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConfirmDialogComponent_Conditional_0_Template, 11, 7, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.svc.pending()) ? 0 : -1, tmp_0_0);
    }
  }, styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.5);\n  z-index: 4000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.box[_ngcontent-%COMP%] {\n  background: var(--card);\n  border-radius: var(--radius);\n  padding: 24px;\n  width: 100%;\n  max-width: 400px;\n  box-shadow: var(--shadow-lg);\n  animation: toastIn 0.18s ease;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\np[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 14px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n/*# sourceMappingURL=confirm.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src\\app\\shared\\ui\\confirm.ts", lineNumber: 52 });
})();

export {
  ConfirmService,
  ConfirmDialogComponent
};
//# sourceMappingURL=chunk-DNXBLQSG.js.map
