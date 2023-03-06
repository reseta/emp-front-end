import { createReducer, on } from '@ngrx/store';
import { removeTokenAction, saveTokenAction } from './auth.actions';

export const featureKey = 'auth';

export interface AuthState {
  token: string | null;
}

export const initialState: AuthState = {
  token: null,
};

export const reducer = createReducer(
  initialState,

  on(saveTokenAction, (state, action) => ({
    token: action.token,
  })),
  on(removeTokenAction, () => ({
    ...initialState,
  })),
);
