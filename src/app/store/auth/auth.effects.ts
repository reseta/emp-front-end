import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, from, of, switchMap } from 'rxjs';
import { LoginResponse } from '../../login/login-response.model';
import { UserService } from '../../services/user.service';
import * as AuthActions from './auth.actions';
import * as CommonActions from '../common/common.actions';
import { addMessage } from '../toast/toast.actions';
import { ToastType } from 'src/app/toast/toast-type.enum';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  signupAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signupAction),
      switchMap((action) =>
        this.userService.create(action.user).pipe(
          switchMap(() =>
            of(
              CommonActions.redirectAction({
                commands: ['/login'],
              }),
            ),
          ),
        ),
      ),
    ),
  );

  signinAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signinAction),
      switchMap((action) =>
        this.userService.login(action.credentials).pipe(
          catchError((errorResponse: HttpErrorResponse) => {
            this.store.dispatch(
              addMessage({
                item: {
                  type: ToastType.DANGER,
                  message: errorResponse.error.error,
                },
              }),
            );

            return EMPTY;
          }),
          switchMap((response: LoginResponse) =>
            from([
              AuthActions.saveTokenAction({ token: response.token }),
              CommonActions.redirectAction({
                commands: ['/browse'],
              }),
            ]),
          ),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UserService,
  ) {}
}
