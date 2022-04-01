import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [
  ]
})
export class AsideComponent implements OnInit {

  categories: any;

  constructor(private categoryData:CategoryService) {
    categoryData.getCategory().subscribe((data) => {
      this.categories=data['data'];
    });
  }

  ngOnInit(): void {
  }

}
