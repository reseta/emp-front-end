import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToastState } from './toast.reducers';
import * as fromToast from './toast.reducers';

export const selectToastState = createFeatureSelector<ToastState>(
  fromToast.featureKey,
);

export const selectItems = createSelector(
  selectToastState,
  (state) => state.items,
);
