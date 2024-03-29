import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { Product } from 'src/app/shared/models/store/products/product';
import { ProductService } from 'src/app/shared/services/store/productos/product.service';
import { CategoryService } from '../../../shared/services/store/category/category.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})

export class StoreComponent implements OnInit {

  products:Product[] = [];

  categories?:ProductCategories[];

  constructor(
    private productService:ProductService,
    private categoryService:CategoryService,
    activatedRoute:ActivatedRoute
    ) {

    let productsObservable:Observable<Product[]>;

    categoryService.getAllProductCategories().subscribe(serverProductCategories => {
      this.categories = serverProductCategories;
    });

    activatedRoute.params.subscribe((params) => {
      if(params['category'])
        productsObservable = this.productService.getProductsByCategories(params['category']);
    })
  }

  ngOnInit(): void {
  }

}
