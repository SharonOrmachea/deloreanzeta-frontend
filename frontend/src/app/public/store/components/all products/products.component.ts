import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { Product } from 'src/app/shared/models/store/products/product';

import { ProductService } from 'src/app/shared/services/store/productos/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {

  products:Product[] = [];

  product!:Product[];

  categories!:ProductCategories[];

  constructor(private productService:ProductService,
              activatedRoute:ActivatedRoute) {

    this.products = this.productService.getAllProducts();
    this.categories = this.productService.getAllProductCategories();

    activatedRoute.params.subscribe((params) => {
      if(params['category'])
      this.products = this.productService.getProductsByCategories(params['category']);
    })
  }

  ngOnInit(): void {
  }

}
