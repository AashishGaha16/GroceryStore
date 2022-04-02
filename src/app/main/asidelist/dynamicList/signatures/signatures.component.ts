import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styles: [
  ]
})
export class SignaturesComponent implements OnInit {

  signatures: any;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.signatures = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'SIGNATURES') {
            return title
          }
      })
    })
  }

  ngOnInit(): void {
  }

}
