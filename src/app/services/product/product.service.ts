import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl: string = "https://uat.ordering-dalle.ekbana.net//api/v4/product/";

  WarehouseId: string = "1";
  ApiKey: string = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";

  
  headers = new HttpHeaders().set("Warehouse-Id", this.WarehouseId).set("Api-Key", this.ApiKey);


  constructor(private http:HttpClient) { }

  getProductDetails (): Observable<any> {
    return this.http.get(this.productUrl, {headers: this.headers})
  }

  getSingleProductDetails(id:number): Observable<any> {
    return this.http.get(this.productUrl+id, {headers: this.headers})
  }

}
