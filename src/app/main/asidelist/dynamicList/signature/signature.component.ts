import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styles: [
  ]
})
export class SignatureComponent implements OnInit {

  signatureDishes: any;
  totalItems: any;
  page: number = 1;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.signatureDishes = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'SIGNATURE') {
            return title
          }
      })
      this.totalItems = data['data'].filter(('SIGNATURE')).length;
    })
  }

  ngOnInit(): void {
  }

}
