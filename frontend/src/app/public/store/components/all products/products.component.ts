import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';

// import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { Product } from 'src/app/shared/models/store/products/product';

import { ProductService } from 'src/app/shared/services/store/productos/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {

  products:Product[] = [];

  p:any;

  constructor(
    private productService:ProductService,
    ) {

    this.p =1;

    // let productsObservable:Observable<Product[]>;

    // productsObservable = this.productService.getAllProducts();

    // productService.getAllProductCategories().subscribe(serverProductCategories => {
    //   this.categories = serverProductCategories;
    // });

    // activatedRoute.params.subscribe((params) => {
    //   if(params['category'])
    //   this.products = this.productService.getProductsByCategories(params['category']);
    // })
  }

  ngOnInit(): void {
    this.getAllProducts();

    // this.productService.getAllProductCategories().subscribe(serverProductCategories => {
    //   this.categories = serverProductCategories;
    // });
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    }, error => {
      console.log(error)
    })
  }

}
