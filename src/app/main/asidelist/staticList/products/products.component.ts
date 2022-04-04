import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: any;
  totalItems: any;
  page: number = 1

  constructor(private productService:ProductService, private message: MessageService) { 
    this.productService.getProductDetails().subscribe((data) => {
      this.products = data['data'];
      this.totalItems = data['data'].length;
    });
  }

  postAddtocart(productId: number, priceId: number,) {
    this.productService.addToCart(productId, priceId).subscribe((response) => {
      this.message.successMessage("Added to cart!!!")
    },
    (err) => {
      const error = err.error['errors'];
        
        for(let e in error){
          this.message.errorMessage(error[e].title , error[e].message);
        }
    })
  }

  ngOnInit(): void {
  }

}
