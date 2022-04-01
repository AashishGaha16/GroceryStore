import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .row-box-alignment{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      overflow: auto;
      margin:4em 1em;
    },
    .product-figure{
      height: 400px;
    }
    .figure-image{
      width: 160px;
      height: 160px;
    }
  `]
})
export class HomeComponent implements OnInit {

  products: any;

  constructor(private productData:ProductService) { 
    this.productData.getProductDetails().subscribe((data) => {
      this.products = data['data']
    });
  }

  ngOnInit(): void {
  }

}
