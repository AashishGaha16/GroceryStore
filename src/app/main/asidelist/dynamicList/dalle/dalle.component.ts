import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-dalle',
  templateUrl: './dalle.component.html',
  styles: [
  ]
})
export class DalleComponent implements OnInit {

  dallemomos: any;

  constructor(private products:ProductService) { 
    this.products.getProductDetails().subscribe(
      (data) => {
        this.dallemomos = data['data'].filter((title: any) => {
          if(title.categoryTitle == 'DALLE MOMOS') {
            return title
          }
      })
    })
  }

  ngOnInit(): void {
  }

}
