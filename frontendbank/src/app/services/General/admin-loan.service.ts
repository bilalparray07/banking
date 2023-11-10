import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userServiceModel } from 'src/service-model/user';
import { UserLoans } from 'src/service-model/userloan';

@Injectable({
  providedIn: 'root',
})
export class AdminLoanService {
  private apiUrl = 'https://banking-cdy3.vercel.app/app/v1/loan'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getAllLoans(): Observable<UserLoans[]> {
    // Implement the HTTP GET request to fetch all loan requests
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    }); // Include your token
    return this.http.get<UserLoans[]>(`${this.apiUrl}`);
  }

  // updateLoanStatus(loanId: string, status: string): Observable<any> {
  //   // Implement the HTTP PUT request to update loan status
  //   const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') }); // Include your token
  //   return this.http.put(`${this.apiUrl}/${loanId}`, { status });
  // }
  getLoanStatusById(loanId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${loanId}`);
  }

  deleteLoanRequest(loanId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${loanId}`);
  }

  updateLoanStatus(loanId: any, updatedLoan: UserLoans): Observable<any> {
    return this.http.put(`${this.apiUrl}/${loanId}`, updatedLoan);
  }
}
