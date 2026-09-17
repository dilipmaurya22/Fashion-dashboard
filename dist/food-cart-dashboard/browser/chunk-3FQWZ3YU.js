import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-G5ETVSKB.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  _toasts = signal([]);
  toasts = this._toasts.asReadonly();
  counter = 0;
  push(type, message) {
    const id = ++this.counter;
    this._toasts.update((list) => [...list, { id, type, message }]);
    setTimeout(() => this.dismiss(id), 3500);
  }
  success(msg) {
    this.push("success", msg);
  }
  error(msg) {
    this.push("error", msg);
  }
  info(msg) {
    this.push("info", msg);
  }
  warning(msg) {
    this.push("warning", msg);
  }
  dismiss(id) {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};

export {
  ToastService
};
//# sourceMappingURL=chunk-3FQWZ3YU.js.map
