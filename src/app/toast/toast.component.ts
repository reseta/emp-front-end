import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItems } from '../store/toast/toast.selectors';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  items$ = this.store.select(selectItems);

  constructor(private store: Store) {}
}
