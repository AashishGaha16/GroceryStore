import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  paymentUrl = "https://uat.ordering-dalle.ekbana.net/api/v4/payment-method";

  headers = new HttpHeaders().set("Api-Key", "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6");

  constructor(private http:HttpClient) { }

  getPaymentDetails (): Observable<any> {
    return this.http.get(this.paymentUrl, {headers: this.headers});
  }

}
