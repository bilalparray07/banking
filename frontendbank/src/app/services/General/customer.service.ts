import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerServiceModel } from 'src/service-model/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://banking-cdy3.vercel.app/app/v1/customers';

  constructor(private http: HttpClient) {}

  private addAuthorizationHeaders(): HttpHeaders {
    // Check if the user is authorized (has a token in sessionStorage)
    const token = sessionStorage.getItem('token');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  createCustomer(customer: CustomerServiceModel): Observable<any> {
    const headers = this.addAuthorizationHeaders();
    return this.http.post(this.apiUrl, customer, { headers });
  }

  updateCustomer(
    customerId: any,
    updatedCustomer: CustomerServiceModel
  ): Observable<any> {
    const headers = this.addAuthorizationHeaders();
    return this.http.put(`${this.apiUrl}/${customerId}`, updatedCustomer, {
      headers,
    });
  }

  deleteCustomer(customerId: string): Observable<any> {
    const headers = this.addAuthorizationHeaders();
    return this.http.delete(`${this.apiUrl}/${customerId}`, { headers });
  }

  getCustomerDetails(customerId: string): Observable<any> {
    const headers = this.addAuthorizationHeaders();
    return this.http.get(`${this.apiUrl}/${customerId}`, { headers });
  }

  getCustomers(): Observable<CustomerServiceModel[]> {
    const headers = this.addAuthorizationHeaders();
    return this.http.get<CustomerServiceModel[]>(this.apiUrl, { headers });
  }

  uploadProfilePicture(customerId: string, pictureFile: File): Observable<any> {
    const headers = this.addAuthorizationHeaders();
    const formData = new FormData();
    formData.append('profilePicture', pictureFile);

    return this.http.post(`${this.apiUrl}/upload/${customerId}`, formData, {
      headers,
    });
  }
}
