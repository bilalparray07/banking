import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accountServiceModel } from 'src/service-model/accounts';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://banking-cdy3.vercel.app/app/v1/account';

  constructor(private http: HttpClient) {}
  private addAuthorizationHeaders(): HttpHeaders {
    // Check if the user is authorized (has a token in sessionStorage)
    const token = sessionStorage.getItem('token');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `${token}`);
    }

    return headers;
  }
  createAccount(accountData: accountServiceModel): Observable<any> {
    let headers = this.addAuthorizationHeaders();
    return this.http.post<accountServiceModel>(`${this.apiUrl}`, accountData);
  }

  getAccounts(): Observable<any[]> {
    let headers = this.addAuthorizationHeaders();
    return this.http.get<accountServiceModel[]>(`${this.apiUrl}`);
  }

  getAccountById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateAccount(id: string, accountData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, accountData);
  }

  deleteAccount(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getUserAccount(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/${userId}`);
  }
}
