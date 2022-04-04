import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baserUrl: string = "https://uat.ordering-dalle.ekbana.net"

  getcart: string = "/api/v4/cart";
  deletecart: string = "/api/v4/cart-product/";
  product: string = "/api/v4/product/";
  addtocart: string = "/api/v4/cart-product"
  patchcart: string = "/api/v4/cart-product/"

  constructor(private http: HttpClient) { }

  getProductDetails (): Observable<any> {
    return this.http.get(this.baserUrl + this.product)
  }

  getSingleProductDetails(id:number): Observable<any> {
    return this.http.get(this.baserUrl + this.product + id)
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

  getCartItems(): Observable<any> {
    return this.http.get(this.baserUrl + this.getcart);
  }

  deleteCartItems(id: number) {
    return this.http.delete(this.baserUrl + this.deletecart + id);
  }

  updateQuantity(id: number, quantity: any) {
    let data = {"quantity": quantity}
    return this.http.patch<any>(this.baserUrl + this.patchcart + id, data);
  }

}
