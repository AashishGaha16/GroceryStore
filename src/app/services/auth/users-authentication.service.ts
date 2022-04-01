import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersAuthenticationService {

  signupurl = 'https://uat.ordering-dalle.ekbana.net/api/v4/auth/signup';
  loginurl = 'https://uat.ordering-dalle.ekbana.net/api/v4/auth/login';
  changepassword = 'https://uat.ordering-dalle.ekbana.net/api/v4/profile/change-password';
  forgotpassword = 'https://uat.ordering-dalle.ekbana.net/api/v4/auth/forgot-password'

  constructor() { }

  userSignup () {

  }

  userLogin () {

  }

  changePassword () {

  }

  forgotPassword () {
    
  }

}
