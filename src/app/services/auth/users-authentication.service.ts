import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { SignupComponent } from 'src/app/main/auth/signup/signup.component';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/main/auth/login/login.component';
import { ProfileComponent } from 'src/app/main/auth/profile/profile.component';


@Injectable({
  providedIn: 'root'
})
export class UsersAuthenticationService {

  baseurl = 'https://uat.ordering-dalle.ekbana.net/'

  signup = 'api/v4/auth/signup';
  login = 'api/v4/auth/login';
  changepassword = 'api/v4/profile/change-password';
  forgotpassword = 'api/v4/auth/forgot-password';
  profile = 'api/v4/profile/show/';

  // Login Body key values
  ClientId:string = "2";
  ClientSecret:string = "olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa";
  GrantType:string = "password";

  constructor(private http: HttpClient) { }

  userSignup (signupFormData: SignupComponent): Observable<any> {
    return this.http.post<any>(this.baseurl + this.signup, signupFormData);
  }

  userLogin (loginFormData: any): Observable<any> {
    let data = loginFormData
    data["client_id"] = this.ClientId;
    data["client_secret"] = this.ClientSecret;
    data["grant_type"] = this.GrantType;
    return this.http.post<any>(this.baseurl + this.login, data);
  }

  changePassword (profileData: ProfileComponent) {
    return this.http.post<any>(this.baseurl + this.changepassword, profileData);
  }

  forgotPassword () {
    
  }

  showUser(): Observable<any> {
    return this.http.get(this.baseurl + this.profile)
  }

  setToken(token : string) {
    localStorage.setItem("Token", token);
  }

  deleteToken() {
    localStorage.removeItem("Token");
  }

  checkToken() {
    const token = localStorage.getItem("Token")
    if(token) {
      return true;
    }
    else {
      return false;
    }
  }

  getToken() {
    const token = localStorage.getItem("Token");
    return token;
  }

}
