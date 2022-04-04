import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styles: [
  ]
})
export class VegComponent implements OnInit {

  vegitems: any;
  totalItems: any;
  page: number = 1;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.vegitems = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'VEG') {
            return title
          }
      })
      this.totalItems = data['data'].filter(('VEG')).length;
    })
  }

  ngOnInit(): void {
  }

}
