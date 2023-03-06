import { createAction, props } from '@ngrx/store';
import { Toast } from '../../toast/toast.model';

export const addMessage = createAction(
  '[Toast] Add new message',
  props<{ item: Toast }>(),
);

export const removeMessages = createAction('[Toast] Remove all messages');
