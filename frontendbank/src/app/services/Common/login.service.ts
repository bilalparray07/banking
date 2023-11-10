import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { userServiceModel } from 'src/service-model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://banking-cdy3.vercel.app';

  login(username: string, password: string, role: string): Observable<any> {
    const body = { username, password, role };

    return this.http.post(`${this.apiUrl}/app/v1/auth/login`, body).pipe(
      tap((response: any) => {
        // Check if the login was successful and a token is present in the response
        if (response.success && response.token) {
          // Store the token in localStorage
          localStorage.setItem('token', response.token);
          console.log(response.token);
        }
      })
    );
  }

  // Add a method to check if the user is logged in
  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in, e.g., check for a token in localStorage
    const token = localStorage.getItem('token');
    return !!token;
  }

  // Add a method to log the user out
  logout() {
    // Implement your logout logic, e.g., remove the token from localStorage
    localStorage.removeItem('token');
  }

  registerUser(userObj: userServiceModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/app/v1/auth/register`, userObj);
  }
}
