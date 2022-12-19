import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/store/cart/cart';
import { CartItem } from 'src/app/shared/models/store/cart/cartItem';
import { Product } from 'src/app/shared/models/store/products/product';
import { CartService } from 'src/app/shared/services/store/cart/cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.sass']
})
export class CartProductsComponent implements OnInit {

  cart!:Cart;

  product!:Product;

  productQuantity:number = 1;

  constructor(private cartService:CartService, private router:Router,) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id);
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
  }

  handleProduct(value:string){
    let active:any = document.getElementById('error')
    if(this.productQuantity < 20 && value === 'add'){
      this.productQuantity += 1
      active.classList.remove('error-active');
    }else if( this.productQuantity>1 && value ==='remove'){
      this.productQuantity -= 1
    }else if(this.productQuantity == 1 && value ==='remove'){
      active.classList.add('error-active')
    }
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/store/cart');
  }

}
