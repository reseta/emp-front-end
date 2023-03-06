import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateUserAction } from '../store/user/user.actions';
import { User } from '../user-form/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private store: Store) {}

  onValidForm(user: User) {
    this.store.dispatch(updateUserAction({ user }));
  }
}
