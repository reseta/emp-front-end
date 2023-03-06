import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveTokenAction } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.restoreState();
  }

  private restoreState() {
    const tokenFromStorage = localStorage.getItem('token');

    if (tokenFromStorage) {
      this.store.dispatch(saveTokenAction({ token: tokenFromStorage }));
    }
  }
}
