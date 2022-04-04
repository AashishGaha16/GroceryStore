import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baserUrl: string = "https://uat.ordering-dalle.ekbana.net"

  productUrl: string = "https://uat.ordering-dalle.ekbana.net/api/v4/product/";
  addtocart: string = "/api/v4/cart-product"

  constructor(private http:HttpClient) { }

  getProductDetails (): Observable<any> {
    return this.http.get(this.productUrl)
  }

  getSingleProductDetails(id:number): Observable<any> {
    return this.http.get(this.productUrl+id)
  }

  addToCart(productId: any, priceId: any) {
    const addtocartData = {
      "productId": productId,
      "priceId": priceId,
      "quantity": 1,
      "note": "testing"
    }
    return this.http.post<any>(this.baserUrl + this.addtocart, addtocartData);
  }

}
