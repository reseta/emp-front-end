import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as CommonActions from './common.actions';

@Injectable()
export class CommonEffects {
  redirectAction = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CommonActions.redirectAction),
        map((action) => this.router.navigate(action.commands, action.extras)),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private router: Router) {}
}
