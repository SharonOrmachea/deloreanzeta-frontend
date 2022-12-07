import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../../shared/models/store/products/product';

import { ProductService } from '../../../../shared/services/store/productos/product.service';

@Component({
  selector: 'app-id-product',
  templateUrl: './id-product.component.html',
  styleUrls: ['./id-product.component.sass']
})
export class IdProductComponent implements OnInit {

  product!:Product;

  constructor(activatedRoute:ActivatedRoute, productService:ProductService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.product = productService.getProductById(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
