import { Component } from '@angular/core';
import { User } from '../user-form/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  onValidForm(user: User) {
    console.log({ user });
  }
}
