import {
  IconComponent,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G5ETVSKB.js";

// src/app/shared/ui/misc.ts
var _c0 = ["*"];
var SpinnerComponent = class _SpinnerComponent {
  size = 28;
  static \u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnerComponent, selectors: [["app-spinner"]], inputs: { size: "size" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 6, consts: [[1, "spin"]], template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "span", 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.size, "px")("height", ctx.size, "px")("border-width", ctx.size / 8, "px");
    }
  }, styles: ["\n\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 50%;\n  border-style: solid;\n  border-color: var(--border);\n  border-top-color: var(--orange);\n  animation: spin 0.7s linear infinite;\n}\n/*# sourceMappingURL=misc.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src\\app\\shared\\ui\\misc.ts", lineNumber: 13 });
})();
var EmptyStateComponent = class _EmptyStateComponent {
  icon = "box";
  title = "Nothing here yet";
  message = "";
  static \u0275fac = function EmptyStateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmptyStateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { icon: "icon", title: "title", message: "message" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 8, vars: 4, consts: [[1, "empty"], [1, "ic"], [3, "name", "size"], [1, "text-secondary"]], template: function EmptyStateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-icon", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h3");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.icon)("size", 28);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message);
    }
  }, dependencies: [IconComponent], styles: ["\n\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.ic[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  background: var(--hover);\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 6px;\n}\np[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=misc.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src\\app\\shared\\ui\\misc.ts", lineNumber: 34 });
})();
var LoadingComponent = class _LoadingComponent {
  static \u0275fac = function LoadingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingComponent, selectors: [["app-loading"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "load"], [1, "text-secondary"]], template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-spinner");
      \u0275\u0275elementStart(2, "span", 1);
      \u0275\u0275text(3, "Loading\u2026");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [SpinnerComponent], styles: ["\n\n.load[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n}\n/*# sourceMappingURL=misc.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingComponent, { className: "LoadingComponent", filePath: "src\\app\\shared\\ui\\misc.ts", lineNumber: 47 });
})();

export {
  SpinnerComponent,
  EmptyStateComponent,
  LoadingComponent
};
//# sourceMappingURL=chunk-ZBQMMIGL.js.map
