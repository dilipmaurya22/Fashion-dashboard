import { Component, Injectable, inject, signal } from '@angular/core';

interface ConfirmOptions {
  title: string;
  message: string;
  confirmText?: string;
  danger?: boolean;
}
interface PendingConfirm extends ConfirmOptions { resolve: (v: boolean) => void; }

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  readonly pending = signal<PendingConfirm | null>(null);

  ask(options: ConfirmOptions): Promise<boolean> {
    return new Promise<boolean>(resolve => this.pending.set({ ...options, resolve }));
  }

  answer(value: boolean) {
    const p = this.pending();
    if (p) { p.resolve(value); this.pending.set(null); }
  }
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  template: `
    @if (svc.pending(); as p) {
      <div class="overlay" (click)="svc.answer(false)">
        <div class="box" (click)="$event.stopPropagation()">
          <h3>{{ p.title }}</h3>
          <p class="text-secondary">{{ p.message }}</p>
          <div class="actions">
            <button class="btn btn-secondary" (click)="svc.answer(false)">Cancel</button>
            <button class="btn" [class.btn-danger]="p.danger" [class.btn-primary]="!p.danger"
              (click)="svc.answer(true)">{{ p.confirmText || 'Confirm' }}</button>
          </div>
        </div>
      </div>
    }`,
  styles: [`
    .overlay { position:fixed; inset:0; background:rgba(17,24,39,.5); z-index:4000; display:flex;
      align-items:center; justify-content:center; padding:16px; }
    .box { background:var(--card); border-radius:var(--radius); padding:24px; width:100%; max-width:400px;
      box-shadow:var(--shadow-lg); animation: toastIn .18s ease; }
    h3 { font-size:18px; margin-bottom:8px; }
    p { margin:0 0 20px; font-size:14px; }
    .actions { display:flex; justify-content:flex-end; gap:10px; }
  `],
})
export class ConfirmDialogComponent { svc = inject(ConfirmService); }
