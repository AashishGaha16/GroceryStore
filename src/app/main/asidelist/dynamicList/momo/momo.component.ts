import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-momo',
  templateUrl: './momo.component.html',
  styles: [
  ]
})
export class MomoComponent implements OnInit {

  momos: any;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.momos = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'MOMO') {
            return title
          }
      })
    })
  }

  ngOnInit(): void {
  }

}
