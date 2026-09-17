import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { AuthResponse, User } from '../models/models';

const TOKEN_KEY = 'fc_token';
const USER_KEY = 'fc_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);
  private router = inject(Router);

  private _user = signal<User | null>(this.readUser());
  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._user());
  readonly role = computed(() => this._user()?.role ?? null);

  login(usernameOrEmail: string, password: string, rememberMe: boolean): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/login', { usernameOrEmail, password, rememberMe }).pipe(
      tap(res => {
        localStorage.setItem(TOKEN_KEY, res.token);
        localStorage.setItem(USER_KEY, JSON.stringify(res.user));
        this._user.set(res.user);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  get token(): string | null { return localStorage.getItem(TOKEN_KEY); }

  hasRole(...roles: string[]): boolean {
    const r = this._user()?.role;
    return !!r && roles.includes(r);
  }

  /** True if the signed-in user holds ANY of the given permission codes. Admin always passes. */
  hasPermission(...perms: string[]): boolean {
    if (!perms.length) return true;
    const u = this._user();
    if (!u) return false;
    if (u.role === 'Admin') return true;              // Admin implicitly has everything
    const held = u.permissions ?? [];
    return perms.some(p => held.includes(p));
  }

  private readUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    try { return raw ? JSON.parse(raw) as User : null; } catch { return null; }
  }
}
