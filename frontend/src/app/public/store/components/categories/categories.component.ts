import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { Product } from 'src/app/shared/models/store/products/product';

import { ProductService } from 'src/app/shared/services/store/productos/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  // categories:ProductCategories[];

  products:Product[] = [];

  suscription!: Subscription;


  constructor(productService:ProductService) {

    // this.categories = productService.getAllProductCategories();


   }

  ngOnInit(): void {
  }

}
