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

export const isAuthenticated = createSelector(
  selectAuthState,
  (state) => !!state.token,
);
