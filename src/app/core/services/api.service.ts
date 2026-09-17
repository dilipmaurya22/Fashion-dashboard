import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/models';

/** Thin wrapper over HttpClient that unwraps the ApiResponse envelope to the payload. */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  private toParams(query?: Record<string, any>): HttpParams {
    let params = new HttpParams();
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined && v !== null && v !== '') params = params.set(k, String(v));
      }
    }
    return params;
  }

  get<T>(url: string, query?: Record<string, any>): Observable<T> {
    return this.http.get<ApiResponse<T>>(`${this.base}${url}`, { params: this.toParams(query) })
      .pipe(map(r => r.data as T));
  }

  post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<ApiResponse<T>>(`${this.base}${url}`, body ?? {}).pipe(map(r => r.data as T));
  }

  put<T>(url: string, body?: any): Observable<T> {
    return this.http.put<ApiResponse<T>>(`${this.base}${url}`, body ?? {}).pipe(map(r => r.data as T));
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<ApiResponse<T>>(`${this.base}${url}`).pipe(map(r => r.data as T));
  }
}
