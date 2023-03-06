import { createAction, props } from '@ngrx/store';
import { User } from '../../user-form/user.model';

export const updateUserAction = createAction(
  '[User] Update user',
  props<{ user: User }>(),
);
