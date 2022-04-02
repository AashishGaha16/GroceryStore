import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupMessage:string = '';
  alert:boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]]
    })
  }

  get signupFormControls() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
  }

  signupUser() {
    console.warn(this.signupForm.value)
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }

}
