import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryurl = 'https://uat.ordering-dalle.ekbana.net/api/v4/category'

  WarehouseId: string = "1";
  ApiKey: string = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";

  constructor(private http:HttpClient) { }

  getCategory (): Observable<any> {
    const headerCategory = new HttpHeaders().set("Warehouse-Id", this.WarehouseId).set("Api-Key", this.ApiKey);
    return this.http.get(this.categoryurl, {headers: headerCategory});
  }

}
