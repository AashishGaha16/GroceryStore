import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  productData: any;

  constructor(private activatedRoute:ActivatedRoute, private singleProductData: ProductService) { 
    const id = this.activatedRoute.snapshot.params['id']
    this.singleProductData.getSingleProductDetails(id).subscribe( (data) => {
      this.productData = data['data'];
    })
  }

  ngOnInit(): void {
  }

  // getSingleProductDetails(private singleProductData: ProductService) {
  //   singleProductData.getSingleProductDetails().subscribe( (data) => 
  //     this.productData = data;
  //   )
  // }

}
