import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserLoans } from 'src/service-model/userloan';

@Injectable({
  providedIn: 'root',
})
export class UserLoanService {
  private apiUrl = 'https://banking-cdy3.vercel.app/app/v1/loan'; // Update with your API URL

  constructor(private http: HttpClient) {}

  createLoanRequest(loanData: any): Observable<any> {
    return this.http.post<UserLoans>(`${this.apiUrl}`, loanData).pipe(
      catchError((error) => {
        console.error('Error creating loan request:', error);
        return throwError('An error occurred while creating the loan request.');
      })
    );
  }
}
