import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';
import * as fromAuth from './auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>(
  fromAuth.featureKey,
);

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token as string,
);
export const selectUser = createSelector(selectAuthState, (state) =>
    state.token?.length ? JSON.parse(atob(state.token.split('.')[1])).user : null,
);

export const isAuthenticated = createSelector(
  selectAuthState,
  (state) => !!state.token,
);
