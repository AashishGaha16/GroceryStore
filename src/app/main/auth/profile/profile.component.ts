import { Component, OnInit } from '@angular/core';
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    .profile_image {
      width: 220px;
      height: 220px;
    }

    .profile_div {
      padding-bottom: 1.5rem !important;
    }

    .img-account-profile {
    height: 10rem;
    }
    .rounded-circle {
        border-radius: 50% !important;
    }
    .card {
        box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
    }
    .card .card-header {
        font-weight: 500;
    }
    .card-header:first-child {
        border-radius: 0.35rem 0.35rem 0 0;
    }
    .card-header {
        padding: 1rem 1.35rem;
        margin-bottom: 0;
        background-color: rgba(33, 40, 50, 0.03);
        border-bottom: 1px solid rgba(33, 40, 50, 0.125);
    }
    .form-control, .dataTable-input {
        display: block;
        width: 100%;
        padding: 0.875rem 1.125rem;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1;
        color: #69707a;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #c5ccd6;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.35rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .nav-borders .nav-link.active {
        color: #0061f2;
        border-bottom-color: #0061f2;
    }
    .nav-borders .nav-link {
        color: #69707a;
        border-bottom-width: 0.125rem;
        border-bottom-style: solid;
        border-bottom-color: transparent;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0;
        padding-right: 0;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .profile_info {
      padding: 0.8em;
    }
  `]
})
export class ProfileComponent implements OnInit {

  // updateProfileBoolean: boolean = false;
  // changePasswordBoolean: boolean = false;
  updateInfo: FormGroup;
  changePasswordForm: FormGroup;
  userDetails: any;


  constructor(private formBuilder: FormBuilder, private userAuth: UsersAuthenticationService, private route: Router) { 
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

  // mustMatch(newPassword: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     const newPass = formGroup.controls[newPassword];
  //     const confPass = formGroup.controls[confirmPassword];
  //     if (confPass.errors && !confPass.errors.mustMatch) {
  //       return
  //     }
  //     if (newPass.value !== confPass.value) {
  //       confPass.setErrors({mustMatch:true})
  //     }
  //     else {
  //       confPass.setErrors(null);
  //     }
  //   }
  // }

  ngOnInit(): void {
  }

  updateProfile() {
    if (this.updateInfo.valid) {
      this.userAuth.updateProfile(this.updateInfo.value).subscribe((data) => {
        alert("Profile Updated Successfully!!!");
        this.route.navigate(['/profile'])
      })
    }
  }

  changePassword() {
    this.userAuth.changeUserPassword(this.changePasswordForm.value).subscribe((data) => {
      alert("Password Changed Successfully!!!");
      this.route.navigate(['/profile'])
    })
  }

  get changePasswordFormControls() {
    return this.changePasswordForm.controls;
  }

  get updateInfoControls() {
    return this.updateInfo.controls;
  }

}
