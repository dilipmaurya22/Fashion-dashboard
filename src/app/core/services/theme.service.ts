import { Injectable, signal } from '@angular/core';

const KEY = 'fc_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // Dark is the default look; only an explicit 'light' choice opts out.
  private _dark = signal<boolean>(localStorage.getItem(KEY) !== 'light');
  readonly dark = this._dark.asReadonly();

  constructor() { this.apply(); }

  toggle() {
    this._dark.set(!this._dark());
    localStorage.setItem(KEY, this._dark() ? 'dark' : 'light');
    this.apply();
  }

  private apply() {
    document.documentElement.setAttribute('data-theme', this._dark() ? 'dark' : 'light');
  }
}
