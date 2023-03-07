import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';
import { selectUser } from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.select(selectUser).pipe(take(1));
  }
}
