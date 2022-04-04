import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseurl = "https://uat.ordering-dalle.ekbana.net/"

  config = "api/v4/config"
  category = 'api/v4/category'

  constructor(private http:HttpClient) { }

  getConfigsData () : Observable<any> {
    return this.http.get(this.baseurl + this.config);
  }

  getCategory (): Observable<any> {
    return this.http.get(this.baseurl + this.category);
  }


}
