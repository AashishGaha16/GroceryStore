import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styles: [
  ]
})
export class RiceComponent implements OnInit {

  riceAndNoodles: any;
  totalItems: any;
  page: number = 1;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.riceAndNoodles = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'RICE AND NOODLES') {
            return title
          }
      })
      this.totalItems = data['data'].filter(('RICE AND NOODLES')).length;
    })
  }

  ngOnInit(): void {
  }

}
