import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateUserAction } from '../store/user/user.actions';
import { User } from '../user-form/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profile = this.route.snapshot.data.profile;

  constructor(private store: Store, private route: ActivatedRoute) {}

  onValidForm(user: User) {
    this.store.dispatch(updateUserAction({ user }));
  }
}
