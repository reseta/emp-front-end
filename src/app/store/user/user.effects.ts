import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';
import * as CommonActions from '../common/common.actions';

@Injectable()
export class UserEffects {
  updateUserAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUserAction),
      switchMap((action) =>
        this.userService.update(action.user).pipe(
          switchMap(() =>
            of(
              CommonActions.redirectAction({
                commands: ['/profile'],
              }),
            ),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
