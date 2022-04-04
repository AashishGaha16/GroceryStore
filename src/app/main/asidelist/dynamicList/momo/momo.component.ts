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
  totalItems: any;
  page: number = 1;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.momos = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'MOMO') {
            return title
          }
      })
      this.totalItems = data['data'].filter(('MOMO')).length;
    })
  }

  ngOnInit(): void {
  }

}
