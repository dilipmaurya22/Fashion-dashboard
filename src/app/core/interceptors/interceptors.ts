import { HttpErrorResponse, HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { ConnectivityService } from '../services/connectivity.service';
import { environment } from '../../../environments/environment';

/** Attaches the JWT bearer token only to our own API, so it never leaks to other hosts. */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token;
  if (token && req.url.startsWith(environment.apiUrl)) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};

/** Surfaces API errors as toasts and logs the user out on 401. */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  const auth = inject(AuthService);
  const router = inject(Router);
  const conn = inject(ConnectivityService);
  const isApi = req.url.startsWith(environment.apiUrl);

  return next(req).pipe(
    tap(ev => { if (isApi && ev.type === HttpEventType.Response) conn.markUp(); }),
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        auth.logout();
      } else if (err.status === 403) {
        // Permission denied. The UI already hides what a user can't access, and the
        // dashboard/widgets fire background GETs that may be forbidden for limited
        // roles — those must stay silent. Only surface it for an explicit action.
        if (req.method !== 'GET') toast.error('You do not have permission to do that.');
      } else if (err.status === 0) {
        if (isApi) conn.markDown();
        toast.error('Cannot reach the server. Is the API running?');
      } else {
        const msg = err.error?.message
          || (err.error?.errors?.length ? err.error.errors[0] : null)
          || 'Something went wrong.';
        // don't toast on the login screen validation (handled inline)
        if (!(err.status === 400 && router.url.includes('/login'))) toast.error(msg);
      }
      return throwError(() => err);
    }),
  );
};
