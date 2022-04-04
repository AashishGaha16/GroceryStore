import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  alert: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private userAuth: UsersAuthenticationService) { 
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  loginUser() {
    try{
      if(this.loginForm.valid){
        this.userAuth.userLogin(this.loginForm.value).subscribe((data) =>{
          this.userAuth.setToken(data['access_token']);
          alert("Login Successful");
          this.loginForm.reset();
          this.router.navigate(['/']);
        })
      }
      else {
        alert("Email and Password did not match!!!")
        this.alert = true;
      }
    }
    catch (error) {
      console.log("Login Failed")
      alert("Login Failed " + error)
    }
  }

  closeAlert() {
    this.alert = false;
  }

}
