import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuthReducer from './auth/auth.reducers';
import * as fromToastReducer from './toast/toast.reducers';

export interface State {
  [fromAuthReducer.featureKey]: fromAuthReducer.AuthState;
  [fromToastReducer.featureKey]: fromToastReducer.ToastState;
}

export const reducers: ActionReducerMap<State> = {
  [fromAuthReducer.featureKey]: fromAuthReducer.reducer,
  [fromToastReducer.featureKey]: fromToastReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
