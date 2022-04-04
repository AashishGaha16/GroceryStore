import { Component, OnInit } from '@angular/core';
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: [
  ]
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private userAuth: UsersAuthenticationService, private formBuilder: FormBuilder, private message: MessageService) { 
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  forgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.userAuth.forgotPassword(this.forgotPasswordForm.value).subscribe((response) =>{
        this.userAuth.setToken(response['access_token']);
        this.message.successMessage("Forgot Password action successful!!!")
        this.forgotPasswordForm.reset();
      },
      (err) => {
        const error = err.error['errors'];
        
        for(let e in error){
          this.message.errorMessage(error[e].title , error[e].message);
        }
      })
    }
  }

}
