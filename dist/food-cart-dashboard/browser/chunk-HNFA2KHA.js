import {
  CommonModule,
  EventEmitter,
  IconComponent,
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
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-G5ETVSKB.js";

// src/app/shared/ui/paginator.ts
function PaginatorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
    \u0275\u0275listener("click", function PaginatorComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page - 1));
    });
    \u0275\u0275element(5, "app-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 3);
    \u0275\u0275listener("click", function PaginatorComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page + 1));
    });
    \u0275\u0275element(9, "app-icon", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (ctx_r1.page - 1) * ctx_r1.pageSize + 1, "\u2013", ctx_r1.min(ctx_r1.page * ctx_r1.pageSize, ctx_r1.totalCount), " of ", ctx_r1.totalCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page <= 1);
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.page, " / ", ctx_r1.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page >= ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
var PaginatorComponent = class _PaginatorComponent {
  page = 1;
  pageSize = 20;
  totalCount = 0;
  totalPages = 1;
  pageChange = new EventEmitter();
  go(p) {
    this.pageChange.emit(p);
  }
  min(a, b) {
    return Math.min(a, b);
  }
  static \u0275fac = function PaginatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginatorComponent, selectors: [["app-paginator"]], inputs: { page: "page", pageSize: "pageSize", totalCount: "totalCount", totalPages: "totalPages" }, outputs: { pageChange: "pageChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "pager"], [1, "text-secondary", "text-small"], [1, "controls"], [1, "pg", 3, "click", "disabled"], ["name", "chevronDown", 2, "transform", "rotate(90deg)", 3, "size"], [1, "cur"], ["name", "chevronDown", 2, "transform", "rotate(-90deg)", 3, "size"]], template: function PaginatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PaginatorComponent_Conditional_0_Template, 10, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.totalPages > 1 ? 0 : -1);
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-top: 1px solid var(--border);\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--card);\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pg[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n.cur[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  min-width: 56px;\n  text-align: center;\n}\n/*# sourceMappingURL=paginator.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginatorComponent, { className: "PaginatorComponent", filePath: "src\\app\\shared\\ui\\paginator.ts", lineNumber: 31 });
})();

export {
  PaginatorComponent
};
//# sourceMappingURL=chunk-HNFA2KHA.js.map
