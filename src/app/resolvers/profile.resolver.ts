import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../user-form/user.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(): Observable<User> {
    return this.userService.getCurrentUser();
  }
}
