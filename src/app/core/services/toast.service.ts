import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();
  private counter = 0;

  private push(type: Toast['type'], message: string) {
    const id = ++this.counter;
    this._toasts.update(list => [...list, { id, type, message }]);
    setTimeout(() => this.dismiss(id), 3500);
  }

  success(msg: string) { this.push('success', msg); }
  error(msg: string) { this.push('error', msg); }
  info(msg: string) { this.push('info', msg); }
  warning(msg: string) { this.push('warning', msg); }

  dismiss(id: number) { this._toasts.update(list => list.filter(t => t.id !== id)); }
}
