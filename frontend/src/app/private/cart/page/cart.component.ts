import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/store/cart/cart';
import { CartService } from 'src/app/shared/services/store/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

}
