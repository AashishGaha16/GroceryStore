import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckoutComponent } from 'src/app/main/checkout/checkout/checkout.component';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  baserUrl: string = "https://uat.ordering-dalle.ekbana.net";
  add_address: string = "/api/v4/delivery-address"

  constructor(private http: HttpClient) { }

  addAddress(checkoutData: CheckoutComponent) {
    return this.http.post<any>(this.baserUrl + this.add_address, checkoutData);
  }

}
