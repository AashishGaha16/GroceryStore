import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styles: [
  ]
})
export class FrozenComponent implements OnInit {

  frozenProducts: any;
  totalItems: any;
  page: number = 1;

  constructor(private products: ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.frozenProducts = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'FROZEN ITEMS') {
            return title
          }
      })
      this.totalItems = data['data'].filter(('FROZEN ITEMS')).length;
    })
  }

  ngOnInit(): void {
  }

}
