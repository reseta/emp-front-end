import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signinAction } from '../store/auth/auth.actions';
import { Credentials } from '../user-form/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store) {}

  onValidForm(credentials: Credentials) {
    this.store.dispatch(signinAction({ credentials }));
  }
}
