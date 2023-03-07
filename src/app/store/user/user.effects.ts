import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';
import * as ToastActions from '../toast/toast.actions';
import * as CommonActions from '../common/common.actions';
import { ToastType } from '../../toast/toast-type.enum';

@Injectable()
export class UserEffects {
  updateUserAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUserAction),
      switchMap((action) =>
        this.userService.update(action.user).pipe(
          switchMap(() =>
            from([
              ToastActions.addMessage({
                item: {
                  type: ToastType.SUCCESS,
                  message: 'Your profile was updated!',
                },
              }),
              CommonActions.redirectAction({
                commands: ['/profile'],
              }),
            ]),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
