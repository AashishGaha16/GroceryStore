import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
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

  constructor(private productService: ProductService, private message: MessageService) { 
    this.productService.getProductDetails().subscribe(
      (data) => {
        this.vegitems = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'VEG') {
            return title
          }
      })
      this.totalItems = data['data'].filter(('VEG')).length;
    })
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
