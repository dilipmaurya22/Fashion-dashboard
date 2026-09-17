import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  router.navigate(['/login']);
  return false;
};

/**
 * Restricts a route by permission (route data.permission — a code or list of codes;
 * user needs ANY of them) or by role (route data.roles). Permission takes precedence.
 */
export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const toast = inject(ToastService);

  const permData = route.data?.['permission'] as string | string[] | undefined;
  if (permData) {
    const perms = Array.isArray(permData) ? permData : [permData];
    if (auth.hasPermission(...perms)) return true;
  } else {
    const roles = route.data?.['roles'] as string[] | undefined;
    if (!roles || auth.hasRole(...roles)) return true;
  }

  toast.error('You do not have permission to access that page.');
  router.navigate(['/dashboard']);
  return false;
};
