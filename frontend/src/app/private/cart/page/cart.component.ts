import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/store/cart/cart';
import { CartService } from '../../../shared/services/store/cart/cart.service';
import { CartItem } from '../../../shared/models/store/cart/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService:CartService) {
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

}
