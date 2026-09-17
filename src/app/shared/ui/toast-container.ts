import { Component, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="toasts">
      @for (t of toast.toasts(); track t.id) {
        <div class="toast {{t.type}}" (click)="toast.dismiss(t.id)">
          <app-icon [name]="icon(t.type)" [size]="18"></app-icon>
          <span>{{ t.message }}</span>
        </div>
      }
    </div>`,
  styles: [`
    .toasts { position: fixed; top: 16px; right: 16px; z-index: 3000; display:flex; flex-direction:column; gap:10px; }
    .toast { display:flex; align-items:center; gap:10px; padding:12px 16px; border-radius:10px; color:#fff;
      box-shadow: var(--shadow-lg); font-size:14px; font-weight:500; cursor:pointer; min-width:240px; max-width:380px;
      animation: toastIn .2s ease; }
    .toast.success { background: var(--success); }
    .toast.error { background: var(--danger); }
    .toast.warning { background: var(--warning); }
    .toast.info { background: var(--info); }
  `],
})
export class ToastContainerComponent {
  toast = inject(ToastService);
  icon(t: string) { return t === 'success' ? 'check' : t === 'error' ? 'close' : t === 'warning' ? 'lowstock' : 'bell'; }
}
