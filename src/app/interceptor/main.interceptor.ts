import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersAuthenticationService } from '../services/auth/users-authentication.service';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private userAuth: UsersAuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.userAuth.getToken();


    if (token) {
      request = request.clone({
        setHeaders: {
          "Authorization": `Bearer ${token}`,
          "Api-Key": "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6", 
          "Warehouse-Id": "1"
        }
      })
    }
    else {
      request = request.clone({
        setHeaders: {"Api-Key": "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6", 
          "Warehouse-Id": "1"
        }
      })
    }

    return next.handle(request);
  }
}
