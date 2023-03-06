import { ToastType } from './toast-type.enum';

export interface Toast {
  type: ToastType;
  message: string;
}
