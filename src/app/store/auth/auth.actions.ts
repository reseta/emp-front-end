import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../user-form/credentials.model';
import { User } from '../../user-form/user.model';

export const signupAction = createAction(
  '[Auth] New user registration',
  props<{ user: User }>(),
);

export const signinAction = createAction(
  '[Auth] Login',
  props<{ credentials: Credentials }>(),
);

export const saveTokenAction = createAction(
  '[Auth] Save auth token',
  props<{ token: string }>(),
);

export const removeTokenAction = createAction('[Auth] Remove auth token');
