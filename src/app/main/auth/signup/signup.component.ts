import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupMessage:string = '';
  alert:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  postSignupData(data: {}) {
    console.warn(data);
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }

}
