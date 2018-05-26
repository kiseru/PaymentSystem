import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerForm } from './customer-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersUrl = "/api/customers";

  constructor(private http: HttpClient) { }

  findAll(): Observable<CustomerForm[]> {
    return this.http.get<CustomerForm[]>(this.customersUrl);
  }

  findOne(id: number): Observable<CustomerForm> {
    return this.http.get<CustomerForm>(`${this.customersUrl}/${id}`);
  } 

  create(customerForm: CustomerForm): Observable<CustomerForm> {
    return this.http.post<CustomerForm>(this.customersUrl, customerForm);
  }

  update(customerForm: CustomerForm): Observable<CustomerForm> {
    return this.http.put<CustomerForm>(`${this.customersUrl}/${customerForm.id}`, customerForm);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.customersUrl}/${id}`);
  }
}
