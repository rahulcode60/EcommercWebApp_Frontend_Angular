import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  [x: string]: any;

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token');
    // Check if the token exists and is not expired
    if (token) {
      const tokenExpiration = new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000);
      if (tokenExpiration > new Date()) {
        return of(true);
      }
    }
    return of(false);
  }

  login(username: string, password: string): Observable<boolean> {
    // Code to login the user and retrieve an access token
    // ...
    const token = 'your_access_token';
    localStorage.setItem('token', token);
    return of(true);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
