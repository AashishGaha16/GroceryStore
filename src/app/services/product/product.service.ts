import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl: string = "https://uat.ordering-dalle.ekbana.net//api/v4/product/";

  constructor(private http:HttpClient) { }

  getProductDetails (): Observable<any> {
    return this.http.get(this.productUrl)
  }

  getSingleProductDetails(id:number): Observable<any> {
    return this.http.get(this.productUrl+id)
  }

}
