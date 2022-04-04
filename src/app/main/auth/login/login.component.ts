import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  // alert: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userAuth: UsersAuthenticationService, private message: MessageService) { 
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

    if(this.loginForm.valid){
        this.userAuth.userLogin(this.loginForm.value).subscribe((response) =>{
        this.userAuth.setToken(response['access_token']);
        this.message.successMessage("Login Successful!!!")
        this.loginForm.reset();
        this.router.navigate(['/']);
      },
      (err) => {
        const error = err.error['errors'];
        
        for(let e in error){
          this.message.errorMessage(error[e].title , error[e].message);
        }
      })
    }
  }

  // closeAlert() {
  //   this.alert = false;
  // }

}
