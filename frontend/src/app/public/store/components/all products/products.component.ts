import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
    ) {

    this.p =1;

    //console.log(this.products)

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
      this.toastr.error(error, 'Se produjo un error');
      //console.log(error)
    })
  }

}
