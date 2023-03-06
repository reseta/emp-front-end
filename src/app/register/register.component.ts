import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signupAction } from '../store/auth/auth.actions';
import { User } from '../user-form/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private store: Store) {}

  onValidForm(user: User) {
    this.store.dispatch(signupAction({ user }));
  }
}
