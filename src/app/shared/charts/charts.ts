import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ChartPoint { label: string; value: number; }
export interface DonutSegment { label: string; value: number; color: string; }

/* ---------------- Mini sparkline (KPI cards) ---------------- */
@Component({
  selector: 'app-sparkline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="spark">
      <defs>
        <linearGradient [attr.id]="gid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" [attr.stop-color]="color" stop-opacity="0.28"/>
          <stop offset="100%" [attr.stop-color]="color" stop-opacity="0"/>
        </linearGradient>
      </defs>
      @if (pts().length > 1) {
        <polygon [attr.points]="area()" [attr.fill]="'url(#' + gid + ')'"/>
        <polyline [attr.points]="line()" fill="none" [attr.stroke]="color" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
      }
    </svg>`,
  styles: [`:host { display:block; width:100%; height:100%; } .spark { width:100%; height:100%; overflow:visible; }`],
})
export class SparklineComponent {
  private _d = signal<number[]>([]);
  @Input() set data(v: number[]) { this._d.set(v || []); }
  @Input() color = '#FF7A00';
  gid = 'sg' + Math.random().toString(36).slice(2, 8);
  pts = computed(() => this._d());
  private coords = computed(() => {
    const d = this._d(); const n = d.length; if (!n) return [] as { x: number; y: number }[];
    const max = Math.max(...d), min = Math.min(...d), range = max - min || 1;
    return d.map((v, i) => ({ x: (100 * i) / (n - 1), y: 38 - ((v - min) / range) * 34 - 2 }));
  });
  line = computed(() => this.coords().map(c => `${c.x},${c.y}`).join(' '));
  area = computed(() => { const c = this.coords(); if (!c.length) return ''; return `0,40 ` + c.map(p => `${p.x},${p.y}`).join(' ') + ` 100,40`; });
}

/* ---------------- Line chart (smooth area with y-axis) ---------------- */
function fmtK(n: number): string {
  if (n <= 0) return '0';
  if (n >= 1000) return +(n / 1000).toFixed(1) + 'k';
  return '' + Math.round(n);
}
function niceMax(m: number): number {
  if (m <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(m)));
  for (const s of [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) if (m <= s * pow) return s * pow;
  return 10 * pow;
}
/** Catmull-Rom → cubic bezier smoothing for a natural curve. */
function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lc">
      <div class="y-axis">
        @for (t of yTicks(); track $index) { <span>{{ t }}</span> }
      </div>
      <div class="lc-plot">
        <div class="chart-area" (mousemove)="onMove($event)" (mouseleave)="hover.set(-1)">
          <svg [attr.viewBox]="'0 0 ' + W + ' ' + H" preserveAspectRatio="none" class="chart">
            <defs>
              <linearGradient [attr.id]="gid" x1="0" y1="0" x2="0" y2="1">
                <stop class="fill-top" offset="0%"/>
                <stop class="fill-bot" offset="100%"/>
              </linearGradient>
            </defs>
            @for (g of gridY(); track $index) { <line x1="0" [attr.x2]="W" [attr.y1]="g" [attr.y2]="g" class="grid"/> }
            @if (coords().length > 1) {
              <path [attr.d]="areaPath()" [attr.fill]="'url(#' + gid + ')'"/>
              <path [attr.d]="linePath()" class="line" fill="none" vector-effect="non-scaling-stroke"/>
            }
          </svg>

          @if (hover() >= 0) {
            <div class="guide" [style.left.%]="ptX(hover())"></div>
            <div class="marker" [style.left.%]="ptX(hover())" [style.top.%]="ptY(hover())"></div>
            <div class="tip" [class.flip]="ptX(hover()) > 62" [style.left.%]="ptX(hover())" [style.top.%]="ptY(hover())">
              <b>{{ points()[hover()].label }}</b>
              <span>{{ tipValue(hover()) }}</span>
            </div>
          }

        </div>
        <div class="x-labels">@for (p of points(); track $index) { <span>{{ p.label }}</span> }</div>
      </div>
    </div>`,
  styles: [`
    :host { display:block; }
    .lc { display:flex; gap:12px; }
    .y-axis { display:flex; flex-direction:column; justify-content:space-between; height:210px; padding-bottom:24px; }
    .y-axis span { font-size:11px; color:var(--text-secondary); line-height:1; white-space:nowrap; }
    .lc-plot { flex:1; min-width:0; }
    .chart-area { position:relative; height:210px; cursor:crosshair; }
    .chart { width:100%; height:210px; display:block; overflow:visible; }
    .grid { stroke:var(--border); stroke-width:1; }
    .line { stroke:var(--orange); stroke-width:2.6; }
    .fill-top { stop-color:var(--orange); stop-opacity:.20; }
    .fill-bot { stop-color:var(--orange); stop-opacity:0; }
    .x-labels { display:flex; justify-content:space-between; margin-top:8px; }
    .x-labels span { font-size:11px; color:var(--text-secondary); }

    .guide { position:absolute; top:0; bottom:0; width:0; border-left:1px dashed var(--orange); opacity:.5; transform:translateX(-50%); pointer-events:none; }
    .marker { position:absolute; width:11px; height:11px; border-radius:50%; background:var(--orange); border:2.5px solid var(--card);
      box-shadow:0 2px 6px rgba(251,82,50,.4); transform:translate(-50%,-50%); pointer-events:none; }
    .tip { position:absolute; transform:translate(-50%,calc(-100% - 14px)); background:var(--charcoal); color:#fff;
      border-radius:10px; padding:7px 12px; white-space:nowrap; pointer-events:none; box-shadow:var(--shadow-lg);
      display:flex; flex-direction:column; gap:2px; z-index:5; }
    .tip.flip { transform:translate(-90%,calc(-100% - 14px)); }
    .tip b { font-size:12px; font-weight:600; opacity:.75; }
    .tip span { font-size:14px; font-weight:800; }
    .tip::after { content:''; position:absolute; bottom:-5px; left:50%; transform:translateX(-50%) rotate(45deg);
      width:9px; height:9px; background:var(--charcoal); }
    .tip.flip::after { left:90%; }
  `],
})
export class LineChartComponent {
  private _pts = signal<ChartPoint[]>([]);
  @Input() set data(v: ChartPoint[]) { this._pts.set(v || []); }
  /** Prefix for the hover value (e.g. '₹'). */
  @Input() prefix = '₹';
  points = computed(() => this._pts());
  gid = 'lc' + Math.random().toString(36).slice(2, 8);
  hover = signal(-1);

  W = 600; H = 210; padY = 14;

  onMove(ev: MouseEvent) {
    const rect = (ev.currentTarget as HTMLElement).getBoundingClientRect();
    const n = this._pts().length;
    if (!n || rect.width === 0) return;
    const frac = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
    this.hover.set(Math.round(frac * (n - 1)));
  }

  ptX(i: number): number { const n = this._pts().length; return n <= 1 ? 50 : (i / (n - 1)) * 100; }
  ptY(i: number): number { const c = this.coords()[i]; return c ? (c.y / this.H) * 100 : 0; }
  tipValue(i: number): string {
    const v = this._pts()[i]?.value ?? 0;
    return this.prefix + v.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  }
  private max = computed(() => niceMax(Math.max(1, ...this._pts().map(p => p.value))));
  coords = computed(() => {
    const pts = this._pts(); const n = pts.length;
    if (!n) return [] as { x: number; y: number }[];
    const innerH = this.H - this.padY * 2;
    return pts.map((p, i) => ({
      x: n === 1 ? this.W / 2 : (this.W * i) / (n - 1),
      y: this.padY + innerH - (p.value / this.max()) * innerH,
    }));
  });
  linePath = computed(() => smoothPath(this.coords()));
  areaPath = computed(() => {
    const c = this.coords(); if (!c.length) return '';
    return smoothPath(c) + ` L ${c[c.length - 1].x} ${this.H} L ${c[0].x} ${this.H} Z`;
  });
  gridY = computed(() => [0, .25, .5, .75, 1].map(f => this.padY + (this.H - this.padY * 2) * f));
  yTicks = computed(() => { const m = this.max(); return [1, .75, .5, .25, 0].map(f => fmtK(m * f)); });
}

/* ---------------- Donut chart ---------------- */
@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wrap">
      <svg viewBox="0 0 42 42" class="donut">
        <circle cx="21" cy="21" r="15.915" class="track"/>
        @for (s of arcs(); track $index) {
          <circle cx="21" cy="21" r="15.915" class="seg"
            [attr.stroke]="s.color" [attr.stroke-dasharray]="s.dash" [attr.stroke-dashoffset]="s.offset"/>
        }
        <text x="21" y="20" class="total">{{ total() }}</text>
        <text x="21" y="25" class="cap">orders</text>
      </svg>
      <div class="legend">
        @for (s of segments(); track s.label) {
          <div class="row"><span class="sw" [style.background]="s.color"></span>{{ s.label }}
            <span class="spacer"></span><b>{{ s.value }}</b></div>
        }
      </div>
    </div>`,
  styles: [`
    .wrap { display:flex; align-items:center; gap:24px; flex-wrap:wrap; }
    .donut { width:160px; height:160px; transform: rotate(-90deg); }
    .track { fill:none; stroke: var(--hover); stroke-width:4; }
    .seg { fill:none; stroke-width:4; stroke-linecap:round; transition: stroke-dasharray .4s; }
    .total { transform: rotate(90deg); transform-origin: center; font-size:7px; font-weight:700; fill:var(--text); text-anchor:middle; }
    .cap { transform: rotate(90deg); transform-origin: center; font-size:2.6px; fill:var(--text-secondary); text-anchor:middle; }
    .legend { flex:1; min-width:160px; display:flex; flex-direction:column; gap:8px; }
    .row { display:flex; align-items:center; gap:8px; font-size:13px; }
    .sw { width:10px; height:10px; border-radius:3px; }
    b { font-variant-numeric: tabular-nums; }
  `],
})
export class DonutChartComponent {
  private _seg = signal<DonutSegment[]>([]);
  @Input() set data(v: DonutSegment[]) { this._seg.set((v || []).filter(s => s.value > 0)); }
  segments = computed(() => this._seg());
  total = computed(() => this._seg().reduce((a, s) => a + s.value, 0));
  arcs = computed(() => {
    const tot = this.total() || 1; let offset = 25; // start at top
    return this._seg().map(s => {
      const pct = (s.value / tot) * 100;
      const arc = { color: s.color, dash: `${pct} ${100 - pct}`, offset };
      offset = (offset - pct + 100) % 100;
      return arc;
    });
  });
}

/* ---------------- Vertical column chart (Order Rate) ---------------- */
export interface ColumnPoint { label: string; value: number; secondary?: number; }

@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cc">
      <div class="yaxis">
        @for (t of ticks(); track t) { <span>{{ t }}</span> }
      </div>
      <div class="plot">
        <div class="cols">
          @for (c of cols(); track $index) {
            <div class="col" (mouseenter)="hover.set($index)" (mouseleave)="hover.set(-1)">
              @if (hover() === $index && c.value > 0) {
                <div class="tip">{{ c.label }}<b>{{ prefix }}{{ c.value | number:'1.0-0' }}</b></div>
              }
              <div class="bar" [class.peak]="$index === peakIndex()" [style.height.%]="c.h"></div>
              <span class="xlabel">{{ c.label }}</span>
            </div>
          }
        </div>
      </div>
    </div>`,
  styles: [`
    .cc { display: flex; gap: 10px; height: 260px; }
    .yaxis { display: flex; flex-direction: column; justify-content: space-between; padding-bottom: 22px; }
    .yaxis span { font-size: 11px; color: var(--text-secondary); }
    .plot { flex: 1; }
    .cols { display: flex; align-items: flex-end; justify-content: space-between; gap: 8px; height: 100%; }
    .col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; position: relative; }
    .bar { width: 60%; max-width: 30px; background: color-mix(in srgb, var(--orange) 34%, transparent); border-radius: 8px 8px 4px 4px; transition: height .4s, background .2s; min-height: 3px; }
    .col:hover .bar { background: color-mix(in srgb, var(--orange) 58%, transparent); }
    .bar.peak { background: var(--coral-grad); }
    .xlabel { font-size: 11px; color: var(--text-secondary); margin-top: 8px; height: 14px; }
    .tip { position: absolute; bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%); background: var(--card);
      border: 1px solid var(--border); box-shadow: var(--shadow-lg); border-radius: 10px; padding: 6px 10px; white-space: nowrap;
      font-size: 11px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; z-index: 5; }
    .tip b { color: var(--text); font-size: 14px; }
  `],
})
export class ColumnChartComponent {
  private _d = signal<ColumnPoint[]>([]);
  @Input() set data(v: ColumnPoint[]) { this._d.set(v || []); }
  @Input() prefix = '₹';
  hover = signal(-1);
  private max = computed(() => Math.max(1, ...this._d().map(p => p.value)));
  peakIndex = computed(() => { const d = this._d(); let idx = 0; d.forEach((p, i) => { if (p.value > d[idx].value) idx = i; }); return d.length ? idx : -1; });
  cols = computed(() => this._d().map(p => ({ ...p, h: (p.value / this.max()) * 100 })));
  ticks = computed(() => {
    const m = this.max();
    const fmt = (n: number) => n <= 0 ? '0' : n >= 1000 ? +(n / 1000).toFixed(1) + 'k' : '' + Math.round(n);
    return [1, .75, .5, .25, 0].map(f => fmt(m * f));
  });
}

/* ---------------- Semicircle gauge (with hover tooltip) ---------------- */
export interface GaugeSegment { label: string; value: number; color: string; hint?: string; }

@Component({
  selector: 'app-gauge-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg viewBox="0 0 200 200" class="gauge">
      <circle cx="100" cy="100" r="80" fill="none" stroke="var(--hover)" stroke-width="26" transform="rotate(-90 100 100)"/>
      @for (a of arcs(); track $index) {
        <circle cx="100" cy="100" r="80" fill="none" [attr.stroke]="a.color" stroke-width="26"
          stroke-linecap="round" [attr.stroke-dasharray]="a.dash" [attr.stroke-dashoffset]="a.offset" pathLength="100"
          transform="rotate(-90 100 100)"
          class="seg" [class.dim]="hover() > -1 && hover() !== $index"
          (mouseenter)="hover.set($index)" (mouseleave)="hover.set(-1)"/>
      }
      @if (hovered(); as h) {
        <text x="100" y="96" text-anchor="middle" class="g-cap">{{ h.label }}</text>
        <text x="100" y="116" text-anchor="middle" class="g-total">{{ h.hint || (h.value + '%') }}</text>
      } @else {
        <text x="100" y="96" text-anchor="middle" class="g-cap">Total</text>
        <text x="100" y="116" text-anchor="middle" class="g-total">{{ totalLabel }}</text>
      }
    </svg>`,
  styles: [`
    :host { display:block; }
    .gauge { width: 100%; max-width: 260px; margin: 0 auto; display: block; }
    .g-cap { font-size: 9px; fill: var(--text-secondary); }
    .g-total { font-size: 15px; font-weight: 800; fill: var(--text); }
    .seg { cursor: pointer; transition: opacity .15s; animation: nlf-seg-draw 1.1s cubic-bezier(.3,.7,.2,1) both; }
    .seg.dim { opacity: .28; }
  `],
})
export class GaugeChartComponent {
  private _s = signal<GaugeSegment[]>([]);
  @Input() set data(v: GaugeSegment[]) { this._s.set(v || []); }
  @Input() totalLabel = '100%';
  hover = signal(-1);
  hovered = computed(() => this._s()[this.hover()] ?? null);
  private total = computed(() => this._s().reduce((a, s) => a + s.value, 0) || 1);
  arcs = computed(() => {
    let acc = 0; const gap = 0.6;
    return this._s().map(s => {
      const pct = (s.value / this.total()) * 100;
      const arc = { color: s.color, dash: `${Math.max(0, pct - gap)} ${100 - pct + gap}`, offset: -acc };
      acc += pct; return arc;
    });
  });
}

/* ---------------- Horizontal bar chart ---------------- */
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bars">
      @for (b of rows(); track $index) {
        <div class="brow">
          <span class="lbl truncate" [title]="b.label">{{ $index + 1 }}. {{ b.label }}</span>
          <div class="track"><div class="fill" [style.width.%]="pct(b.value)"></div></div>
          <span class="val">{{ b.value }}</span>
        </div>
      }
    </div>`,
  styles: [`
    .bars { display:flex; flex-direction:column; gap:14px; }
    .brow { display:grid; grid-template-columns: 150px 1fr 46px; align-items:center; gap:12px; }
    .lbl { font-size:13px; }
    .track { background: var(--hover); border-radius:6px; height:10px; overflow:hidden; }
    .fill { height:100%; background: linear-gradient(90deg, var(--orange), var(--orange-dark)); border-radius:6px; transition: width .4s; transform-origin:left; }
    .val { font-size:13px; font-weight:600; text-align:right; font-variant-numeric: tabular-nums; }
    @media (max-width:600px){ .brow { grid-template-columns: 110px 1fr 40px; } }
    @media (prefers-reduced-motion: no-preference) {
      .fill { animation: nlf-bar-grow .75s cubic-bezier(.2,.7,.2,1) both; }
      .val { animation: nlf-fade .5s ease both; }
      .brow:nth-child(1) .fill, .brow:nth-child(1) .val { animation-delay: .05s; }
      .brow:nth-child(2) .fill, .brow:nth-child(2) .val { animation-delay: .12s; }
      .brow:nth-child(3) .fill, .brow:nth-child(3) .val { animation-delay: .19s; }
      .brow:nth-child(4) .fill, .brow:nth-child(4) .val { animation-delay: .26s; }
      .brow:nth-child(5) .fill, .brow:nth-child(5) .val { animation-delay: .33s; }
      .brow:nth-child(6) .fill, .brow:nth-child(6) .val { animation-delay: .40s; }
      .brow:nth-child(7) .fill, .brow:nth-child(7) .val { animation-delay: .47s; }
      .brow:nth-child(8) .fill, .brow:nth-child(8) .val { animation-delay: .54s; }
    }
    @keyframes nlf-bar-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes nlf-fade { from { opacity: 0; } to { opacity: 1; } }
  `],
})
export class BarChartComponent {
  private _rows = signal<ChartPoint[]>([]);
  @Input() set data(v: ChartPoint[]) { this._rows.set(v || []); }
  rows = computed(() => this._rows());
  private max = computed(() => Math.max(1, ...this._rows().map(r => r.value)));
  pct(v: number) { return (v / this.max()) * 100; }
}
