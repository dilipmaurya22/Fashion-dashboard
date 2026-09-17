import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { FashioncartLoaderComponent } from '../fashioncart-loader/fashioncart-loader.component';

@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `<span class="spin" [style.width.px]="size" [style.height.px]="size" [style.borderWidth.px]="size/8"></span>`,
  styles: [`
    .spin { display:inline-block; border-radius:50%; border-style:solid;
      border-color: var(--border); border-top-color: var(--orange); animation: spin .7s linear infinite; }
  `],
})
export class SpinnerComponent { @Input() size = 28; }

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="empty">
      <div class="ic"><app-icon [name]="icon" [size]="28"></app-icon></div>
      <h3>{{ title }}</h3>
      <p class="text-secondary">{{ message }}</p>
      <ng-content></ng-content>
    </div>`,
  styles: [`
    .empty { text-align:center; padding:48px 24px; }
    .ic { width:64px; height:64px; border-radius:16px; background:var(--hover); color:var(--text-secondary);
      display:flex; align-items:center; justify-content:center; margin:0 auto 16px; }
    h3 { font-size:16px; margin-bottom:6px; }
    p { margin:0 0 16px; font-size:14px; }
  `],
})
export class EmptyStateComponent {
  @Input() icon = 'box';
  @Input() title = 'Nothing here yet';
  @Input() message = '';
}

/** Thin alias so existing <app-loading> usages get the branded FashionCart ring loader. */
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [FashioncartLoaderComponent],
  template: `<app-fashioncart-loader [label]="label" [subLabel]="subLabel"></app-fashioncart-loader>`,
})
export class LoadingComponent {
  @Input() label = 'Loading...';
  @Input() subLabel = 'Please wait...';
}
