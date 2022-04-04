import { Component, OnInit } from '@angular/core';
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    
  `]
})
export class ProfileComponent implements OnInit {

  // updateProfileBoolean: boolean = false;
  // changePasswordBoolean: boolean = false;
  updateInfo: FormGroup;
  changePasswordForm: FormGroup;
  userDetails: any;


  constructor(private formBuilder: FormBuilder, private userAuth: UsersAuthenticationService, private route: Router, private message: MessageService) { 
    this.updateInfo = this.formBuilder.group({
      "first-name": ['', [Validators.required]],
      "last-name": ['', [Validators.required]]
    })
    
    this.changePasswordForm = this.formBuilder.group({
      "old-password": ['', [Validators.required]],
      "new-password": ['', [Validators.required, Validators.minLength(6)]],
      "confirm-password": ['', [Validators.required]]
    })

    this.userAuth.showUser().subscribe((data) => {
      this.userDetails = data['data']
    })
  }

  ngOnInit(): void {
  }

  updateProfile() {
    if (this.updateInfo.valid) {
      this.userAuth.updateProfile(this.updateInfo.value).subscribe((data) => {
        this.message.successMessage("Profile Updated Successfully!!!");
        this.route.navigate(['/profile'])
      })
    }
  }

  changePassword() {
    this.userAuth.changeUserPassword(this.changePasswordForm.value).subscribe((response) => {
      this.message.successMessage("Password Changed Successfully!!!");
      this.route.navigate(['/profile'])
    },
    (err) => {
      const error = err.error['errors'];
      
      for(let e in error){
        this.message.errorMessage(error[e].title , error[e].message);
      }
    })
  }

  get changePasswordFormControls() {
    return this.changePasswordForm.controls;
  }

  get updateInfoControls() {
    return this.updateInfo.controls;
  }

}
