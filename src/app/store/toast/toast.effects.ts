import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, of, switchMap } from 'rxjs';
import * as ToastActions from './toast.actions';

@Injectable()
export class ToastEffects {
  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToastActions.addMessage),
      delay(3000),
      switchMap(() => of(ToastActions.removeMessages())),
    ),
  );

  constructor(private actions$: Actions) {}
}
