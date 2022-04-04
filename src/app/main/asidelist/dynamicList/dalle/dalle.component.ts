import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-dalle',
  templateUrl: './dalle.component.html',
  styles: [
  ]
})
export class DalleComponent implements OnInit {

  dallemomos: any;
  totalItems: any;
  page: number = 1;

  constructor(private productService:ProductService, private message: MessageService) { 
    this.productService.getProductDetails().subscribe(
      (data) => {
        this.dallemomos = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'DALLE MOMOS') {
            return title
          }
      })
      this.totalItems = data['data'].filter(('DALLE MOMOS')).length;
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
