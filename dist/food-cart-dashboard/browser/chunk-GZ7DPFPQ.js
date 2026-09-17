import {
  ɵɵdefinePipe
} from "./chunk-G5ETVSKB.js";

// src/app/shared/pipes/money.pipe.ts
var MoneyPipe = class _MoneyPipe {
  transform(value, symbol = "\u20B9", decimals = 2) {
    const n = Number(value ?? 0);
    return symbol + n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  static \u0275fac = function MoneyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoneyPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "money", type: _MoneyPipe, pure: true, standalone: true });
};

export {
  MoneyPipe
};
//# sourceMappingURL=chunk-GZ7DPFPQ.js.map
