import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styles: [
  ]
})
export class NonvegComponent implements OnInit {

  nonvegitems: any;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.nonvegitems = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'NON VEG') {
            return title
          }
      })
    })
  }

  ngOnInit(): void {
  }

}
