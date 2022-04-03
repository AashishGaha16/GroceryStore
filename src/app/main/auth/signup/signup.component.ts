import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';
import { Router } from '@angular/router'

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

  constructor(private formBuilder: FormBuilder, private router:Router, private signupFormData: UsersAuthenticationService) { 
    this.signupForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile_number: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'), Validators.maxLength(10)]]
    })
  }

  ngOnInit(): void {
  }

  get signupFormControls() {
    return this.signupForm.controls;
  }
  
  signupUser() {
    try{
      if(this.signupForm.valid){
        this.signupFormData.userSignup(this.signupForm.value).subscribe((data) =>{
          alert("Signup Successful");
          this.signupForm.reset();
          this.router.navigate(['login']);
          this.alert = true;
        }), 
        (err: any) => {
          alert("Signup Failed")
          console.log("error: " + err)
        }
      }
    }
    catch (error) {
      alert(error)
    }
  }
  

  closeAlert() {
    this.alert = false;
  }

}
