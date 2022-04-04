import { Component, OnInit } from '@angular/core';
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  userLoggedIn: boolean = false;
  search_query: any = {title: ''}

  constructor(private router: Router, private userAuth: UsersAuthenticationService, private message: MessageService) { 

    const token = this.userAuth.checkToken()
    if (token) {
      this.userLoggedIn = true;
    }
    else {
      this.userLoggedIn = false;
    }
  }

  ngOnInit(): void {
  }

  logout() {
    this.userAuth.deleteToken();
    this.message.successMessage("Logout Successful!!!");
    this.router.navigate(['/login']);
  }

  // searchItems(query) {
  // }

}
