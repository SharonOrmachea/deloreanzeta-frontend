import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../../shared/models/store/products/product';

import { ProductService } from '../../../../shared/services/store/productos/product.service';
import { CartService } from '../../../../shared/services/store/cart/cart.service';



@Component({
  selector: 'app-id-product',
  templateUrl: './id-product.component.html',
  styleUrls: ['./id-product.component.sass']
})

export class IdProductComponent implements OnInit {

  product!:Product;

  productQuantity:number = 1;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private productService:ProductService,
    private cartService:CartService) {

    this.activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.productService.getProductById(params['id']).subscribe(getProductById => {
          this.product = getProductById;
        }
        );
    });

  }

  ngOnInit(): void {
  }

  handleProduct(value:string){
    let active:any = document.getElementById('error')
    if(this.productQuantity < 20 && value === 'add'){
      this.productQuantity += 1
      active.classList.remove('error-active');
    } else if( this.productQuantity>1 && value ==='remove'){
      this.productQuantity -= 1
    } else if(this.productQuantity == 1 && value ==='remove'){
      active.classList.add('error-active')
    }
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/store/cart');
  }
}
