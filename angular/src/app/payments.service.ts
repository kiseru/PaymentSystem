import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';
import { PaymentForm } from './payment-form';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private paymentsUrl = "/api/payments";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentsUrl);
  }

  create(paymentForm: PaymentForm): Observable<Payment> {
    return this.http.post<Payment>(this.paymentsUrl, paymentForm);
  }
}
