import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: [`
    /* .payment_flex {
      display: flex !important;
      flex-flow: row wrap !important;
      justify-content: space-between !important;
      margin: 1em !important;
    }

    .payment_flex_left {
      float: left;
    }

    .payment_flex_right {
      float: right;
    } */

    .pp-img {
      width: 120px;
      height: 120px;
    }

  `]
})
export class PaymentComponent implements OnInit {

  paymentMethods: any;

  constructor(private paymentMethod: PaymentService) { 
    this.paymentMethod.getPaymentDetails().subscribe((data) => {
      this.paymentMethods = data['data'];
    })
  }

  ngOnInit(): void {
    
  }

}
