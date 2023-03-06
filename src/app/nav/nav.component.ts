import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeTokenAction } from '../store/auth/auth.actions';
import { isAuthenticated } from '../store/auth/auth.selectors';
import { redirectAction } from '../store/common/common.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isAuthenticated$ = this.store.select(isAuthenticated);

  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(removeTokenAction());
    this.store.dispatch(
        redirectAction({
          commands: ['/login'],
        }),
    );
  }
}
