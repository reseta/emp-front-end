import { createReducer, on } from '@ngrx/store';
import { addMessage, removeMessages } from './toast.actions';

export const featureKey = 'toast';

export interface ToastState {
  items: any[];
}

export const initialState: ToastState = {
  items: [],
};

export const reducer = createReducer(
  initialState,

  on(addMessage, (state, action) => ({
    items: [...state.items, action.item],
  })),

  on(removeMessages, () => ({
    ...initialState,
  })),
);
