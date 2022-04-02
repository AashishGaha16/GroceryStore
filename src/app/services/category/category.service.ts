import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseurl = "https://uat.ordering-dalle.ekbana.net/"

  config = "api/v4/config"

  categoryurl = 'https://uat.ordering-dalle.ekbana.net/api/v4/category'

  WarehouseId: string = "1";
  ApiKey: string = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";

  headersApikey = new HttpHeaders().set("Api-Key", this.ApiKey);
  headersWarehouseApikey = new HttpHeaders().set("Warehouse-Id", this.WarehouseId).set("Api-Key", this.ApiKey);

  constructor(private http:HttpClient) { }

  getConfigsData () : Observable<any> {
    return this.http.get(this.baseurl + this.config, {headers: this.headersApikey});
  }

  getCategory (): Observable<any> {
    return this.http.get(this.categoryurl, {headers: this.headersWarehouseApikey});
  }


}
