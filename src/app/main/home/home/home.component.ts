import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .wallpaper_image_height {
      width: 100%;
      height: 240px;
      opacity: 0.5;
      border: 1px solid green;
    }
  `]
})
export class HomeComponent implements OnInit {

  products: any;
  configs: any;

  //pagination
  totalItems: any;
  page: number = 1;

  search_query: any = {title: ''}

  constructor(private productService: ProductService, private configData: CategoryService, private message: MessageService) { 
    this.productService.getProductDetails().subscribe((data) => {
      this.products = data['data']
      this.totalItems = data['data'].length;
    });

    this.configData.getConfigsData().subscribe((data) => {
      this.configs = data['data']
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
