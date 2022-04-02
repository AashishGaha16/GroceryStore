import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private productData:ProductService) { 
    this.productData.getProductDetails().subscribe((data) => {
      this.products = data['data']
    });
  }

  ngOnInit(): void {
  }

}
