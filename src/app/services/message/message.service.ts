import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toaster:ToastrService) { }

  successMessage(message:any) {
    this.toaster.success(message);
  }

  errorMessage(title:any, message:any) {
    this.toaster.error(title, message);
  }


}
