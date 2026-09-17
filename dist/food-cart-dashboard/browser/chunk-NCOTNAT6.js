import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G5ETVSKB.js";

// src/app/shared/charts/charts.ts
function LineChartComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 1);
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("x1", ctx_r1.pad)("x2", ctx_r1.W - ctx_r1.pad)("y1", g_r1)("y2", g_r1);
  }
}
function LineChartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polygon", 4)(1, "polyline", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("points", ctx_r1.areaPoints());
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.linePoints());
  }
}
function LineChartComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 2);
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275attribute("cx", p_r3.x)("cy", p_r3.y);
  }
}
function LineChartComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.label);
  }
}
var _forTrack0 = ($index, $item) => $item.label;
function DonutChartComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 3);
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275attribute("stroke", s_r1.color)("stroke-dasharray", s_r1.dash)("stroke-dashoffset", s_r1.offset);
  }
}
function DonutChartComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "span", 9);
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", s_r2.label, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.value);
  }
}
function BarChartComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", b_r1.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", $index_r2 + 1, ". ", b_r1.label, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.pct(b_r1.value), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.value);
  }
}
var LineChartComponent = class _LineChartComponent {
  _pts = signal([]);
  set data(v) {
    this._pts.set(v || []);
  }
  points = computed(() => this._pts());
  W = 600;
  H = 220;
  pad = 10;
  max = computed(() => Math.max(1, ...this._pts().map((p) => p.value)));
  coords = computed(() => {
    const pts = this._pts();
    const n = pts.length;
    if (!n)
      return [];
    const innerW = this.W - this.pad * 2, innerH = this.H - this.pad * 2;
    return pts.map((p, i) => ({
      x: this.pad + (n === 1 ? innerW / 2 : innerW * i / (n - 1)),
      y: this.pad + innerH - p.value / this.max() * innerH
    }));
  });
  linePoints = computed(() => this.coords().map((c) => `${c.x},${c.y}`).join(" "));
  areaPoints = computed(() => {
    const c = this.coords();
    if (!c.length)
      return "";
    return `${c[0].x},${this.H - this.pad} ` + c.map((p) => `${p.x},${p.y}`).join(" ") + ` ${c[c.length - 1].x},${this.H - this.pad}`;
  });
  gridLines = computed(() => [0, 0.25, 0.5, 0.75, 1].map((f) => this.pad + (this.H - this.pad * 2) * f));
  static \u0275fac = function LineChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LineChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LineChartComponent, selectors: [["app-line-chart"]], inputs: { data: "data" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [["preserveAspectRatio", "none", 1, "chart"], [1, "grid"], ["r", "3.5", 1, "dot"], [1, "labels"], [1, "area"], [1, "line"]], template: function LineChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0);
      \u0275\u0275repeaterCreate(1, LineChartComponent_For_2_Template, 1, 4, ":svg:line", 1, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275template(3, LineChartComponent_Conditional_3_Template, 2, 2);
      \u0275\u0275repeaterCreate(4, LineChartComponent_For_5_Template, 1, 2, ":svg:circle", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275repeaterCreate(7, LineChartComponent_For_8_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("viewBox", "0 0 " + ctx.W + " " + ctx.H);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.gridLines());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.points().length > 1 ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.coords());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.points());
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  overflow: visible;\n}\n.grid[_ngcontent-%COMP%] {\n  stroke: var(--border);\n  stroke-width: 1;\n}\n.line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--orange);\n  stroke-width: 2.5;\n  vector-effect: non-scaling-stroke;\n}\n.area[_ngcontent-%COMP%] {\n  fill: rgba(249, 115, 22, 0.12);\n}\n.dot[_ngcontent-%COMP%] {\n  fill: var(--orange);\n  stroke: var(--card);\n  stroke-width: 2;\n}\n.labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  padding: 0 6px;\n}\n.labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=charts.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LineChartComponent, { className: "LineChartComponent", filePath: "src\\app\\shared\\charts\\charts.ts", lineNumber: 39 });
})();
var DonutChartComponent = class _DonutChartComponent {
  _seg = signal([]);
  set data(v) {
    this._seg.set((v || []).filter((s) => s.value > 0));
  }
  segments = computed(() => this._seg());
  total = computed(() => this._seg().reduce((a, s) => a + s.value, 0));
  arcs = computed(() => {
    const tot = this.total() || 1;
    let offset = 25;
    return this._seg().map((s) => {
      const pct = s.value / tot * 100;
      const arc = { color: s.color, dash: `${pct} ${100 - pct}`, offset };
      offset = (offset - pct + 100) % 100;
      return arc;
    });
  });
  static \u0275fac = function DonutChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DonutChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonutChartComponent, selectors: [["app-donut-chart"]], inputs: { data: "data" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "wrap"], ["viewBox", "0 0 42 42", 1, "donut"], ["cx", "21", "cy", "21", "r", "15.915", 1, "track"], ["cx", "21", "cy", "21", "r", "15.915", 1, "seg"], ["x", "21", "y", "20", 1, "total"], ["x", "21", "y", "25", 1, "cap"], [1, "legend"], [1, "row"], [1, "sw"], [1, "spacer"]], template: function DonutChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "circle", 2);
      \u0275\u0275repeaterCreate(3, DonutChartComponent_For_4_Template, 1, 3, ":svg:circle", 3, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(5, "text", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "text", 5);
      \u0275\u0275text(8, "orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, DonutChartComponent_For_11_Template, 6, 4, "div", 7, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.arcs());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.total());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.segments());
    }
  }, dependencies: [CommonModule], styles: ["\n\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.donut[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  transform: rotate(-90deg);\n}\n.track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--hover);\n  stroke-width: 4;\n}\n.seg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 4;\n  stroke-linecap: round;\n  transition: stroke-dasharray 0.4s;\n}\n.total[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transform-origin: center;\n  font-size: 7px;\n  font-weight: 700;\n  fill: var(--text);\n  text-anchor: middle;\n}\n.cap[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transform-origin: center;\n  font-size: 2.6px;\n  fill: var(--text-secondary);\n  text-anchor: middle;\n}\n.legend[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.sw[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n}\nb[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=charts.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonutChartComponent, { className: "DonutChartComponent", filePath: "src\\app\\shared\\charts\\charts.ts", lineNumber: 99 });
})();
var BarChartComponent = class _BarChartComponent {
  _rows = signal([]);
  set data(v) {
    this._rows.set(v || []);
  }
  rows = computed(() => this._rows());
  max = computed(() => Math.max(1, ...this._rows().map((r) => r.value)));
  pct(v) {
    return v / this.max() * 100;
  }
  static \u0275fac = function BarChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarChartComponent, selectors: [["app-bar-chart"]], inputs: { data: "data" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "bars"], [1, "brow"], [1, "lbl", "truncate", 3, "title"], [1, "track"], [1, "fill"], [1, "val"]], template: function BarChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, BarChartComponent_For_2_Template, 7, 6, "div", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.rows());
    }
  }, dependencies: [CommonModule], styles: ["\n\n.bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.brow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 150px 1fr 46px;\n  align-items: center;\n  gap: 12px;\n}\n.lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.track[_ngcontent-%COMP%] {\n  background: var(--hover);\n  border-radius: 6px;\n  height: 10px;\n  overflow: hidden;\n}\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--orange),\n      var(--orange-dark));\n  border-radius: 6px;\n  transition: width 0.4s;\n}\n.val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n@media (max-width: 600px) {\n  .brow[_ngcontent-%COMP%] {\n    grid-template-columns: 110px 1fr 40px;\n  }\n}\n/*# sourceMappingURL=charts.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarChartComponent, { className: "BarChartComponent", filePath: "src\\app\\shared\\charts\\charts.ts", lineNumber: 140 });
})();

export {
  LineChartComponent,
  DonutChartComponent,
  BarChartComponent
};
//# sourceMappingURL=chunk-NCOTNAT6.js.map
