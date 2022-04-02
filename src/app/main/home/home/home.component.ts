import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    
  ]
})
export class HomeComponent implements OnInit {

  products: any;
  configs: any;

  constructor(private productData: ProductService, private configData: CategoryService) { 
    this.productData.getProductDetails().subscribe((data) => {
      this.products = data['data']
    });

    this.configData.getConfigsData().subscribe((data) => {
      this.configs = data['data']
    });
  }


  ngOnInit(): void {
  }

}
