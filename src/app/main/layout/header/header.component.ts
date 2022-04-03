import { Component, OnInit } from '@angular/core';
import { UsersAuthenticationService } from 'src/app/services/auth/users-authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  userLoggedIn: boolean = false;

  constructor(private userAuth: UsersAuthenticationService, private router: Router) { 
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
    this.router.navigate(['/login'])
  }

}
