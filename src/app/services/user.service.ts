import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user-form/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private path = '/user';

  constructor(private http: HttpClient) {}

  create(user: User) {
    return this.http.post(`${environment.API_URL}/${this.path}`, user);
  }

  update(user: User) {
    return this.http.put(`${environment.API_URL}/${this.path}`, user);
  }

  login(user: User) {
    return this.http.post(`${environment.API_URL}/${this.path}/login`, user);
  }
}
