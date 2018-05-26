import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biller } from './biller';
import { Observable } from 'rxjs';
import { BillerForm } from './biller-form';

@Injectable({
  providedIn: 'root'
})
export class BillersService {

  private billersUrl = "/api/billers";

  constructor(private http: HttpClient) { }

  create(billerForm: BillerForm): Observable<Biller> {
    return this.http.post<Biller>(this.billersUrl, billerForm);
  }

  update(biller: Biller): Observable<Biller> {
    return this.http.put<Biller>(`${this.billersUrl}/${biller.id}`, biller);
  }

  findAll(): Observable<Biller[]> {
    return this.http.get<Biller[]>(this.billersUrl);
  }

  findOne(id: number): Observable<Biller> {
    return this.http.get<Biller>(`${this.billersUrl}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.billersUrl}/${id}`);
  }
}
