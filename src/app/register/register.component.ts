import { Component } from '@angular/core';
import { User } from '../user-form/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  onValidForm(user: User) {
    console.log({ user });
  }
}
