import { Directive, ElementRef, Input, OnChanges, inject } from '@angular/core';

/**
 * Animates a number counting up to its value (easeOutCubic). Reusable on any KPI/stat value.
 *   <span [appCountUp]="value" [cuMoney]="true" [cuDecimals]="2"></span>
 * Respects prefers-reduced-motion (renders the final value immediately).
 */
@Directive({ selector: '[appCountUp]', standalone: true })
export class CountUpDirective implements OnChanges {
  @Input('appCountUp') value: number | null | undefined = 0;
  @Input() cuMoney = false;
  @Input() cuDecimals = 0;
  @Input() cuDuration = 900;

  private el: ElementRef<HTMLElement> = inject(ElementRef);
  private current = 0;
  private raf = 0;

  ngOnChanges() {
    const to = +(this.value ?? 0);
    const reduce = (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches)
      || (typeof document !== 'undefined' && document.hidden);   // hidden tabs throttle rAF — just show the value
    if (reduce || isNaN(to)) { this.current = isNaN(to) ? 0 : to; this.render(this.current); return; }
    this.animate(this.current, to);
  }

  private animate(from: number, to: number) {
    if (from === to) { this.render(to); return; }
    cancelAnimationFrame(this.raf);
    this.render(from);   // paint the first frame synchronously so a value is always visible
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / this.cuDuration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = from + (to - from) * eased;
      this.render(v);
      if (t < 1) { this.raf = requestAnimationFrame(tick); }
      else { this.current = to; this.render(to); }
    };
    this.raf = requestAnimationFrame(tick);
  }

  private render(v: number) {
    const num = this.cuMoney || this.cuDecimals > 0
      ? v.toLocaleString('en-IN', { minimumFractionDigits: this.cuDecimals, maximumFractionDigits: this.cuDecimals })
      : Math.round(v).toLocaleString('en-IN');
    this.el.nativeElement.textContent = this.cuMoney ? '₹' + num : num;
  }
}
