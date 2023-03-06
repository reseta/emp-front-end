import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { selectToken } from '../store/auth/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private publicPaths = ['/signup', '/signin'];

  constructor(private store: Store) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // skip all non-api requests
    if (!request.url.startsWith(environment.API_URL)) {
      return next.handle(request.clone());
    }

    // skip all public endpoints
    const requestPath = request.url.replace(environment.API_URL, '');
    if (this.publicPaths.includes(requestPath)) {
      return next.handle(request.clone());
    }

    return this.store.select(selectToken).pipe(
      take(1),
      switchMap((token: string) => {
        const authReq = request.clone({
          headers: request.headers.set('Authorization', token),
        });

        return next.handle(authReq);
      }),
    );
  }
}
