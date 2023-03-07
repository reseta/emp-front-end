import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../login/login-response.model';
import { Credentials } from '../user-form/credentials.model';
import { User } from '../user-form/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private path = {
    create: 'signup',
    update: 'user',
    login: 'signin',
    delete: 'user',
    info: 'user',
  };

  constructor(private http: HttpClient) {}

  create(user: User) {
    return this.http.post(`${environment.API_URL}/${this.path.create}`, user);
  }

  update(user: User) {
    return this.http.put(`${environment.API_URL}/${this.path.update}`, user);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/${this.path.info}`);
  }

  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http
        .post<LoginResponse>(`${environment.API_URL}/${this.path.login}`, {
          ...credentials,
        })
        .pipe(
            tap((response: LoginResponse) =>
                localStorage.setItem('token', response.token),
            ),
        );
  }
}
