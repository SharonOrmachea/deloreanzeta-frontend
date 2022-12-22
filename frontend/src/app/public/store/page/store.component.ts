import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { Product } from 'src/app/shared/models/store/products/product';
import { ProductService } from 'src/app/shared/services/store/productos/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})

export class StoreComponent implements OnInit {

  products:Product[] = [];

  categories?:ProductCategories[];

  constructor(private productService:ProductService, activatedRoute:ActivatedRoute) {
    this.categories = this.productService.getAllProductCategories();

    activatedRoute.params.subscribe((params) => {
      if(params['category'])
      this.products = productService.getProductsByCategories(params['category']);
    })
  }

  ngOnInit(): void {
  }

}
