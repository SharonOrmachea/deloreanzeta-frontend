import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/store/cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  @Input()
  visibleNav = true;

  cartQuantity = 0;

  constructor(
    cartService:CartService,
    private router: Router,

    ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {
  }

  paginaLogin(){
    this.router.navigate(['/login']);
  }

  paginaSignIn(){
    this.router.navigate(['/sign-in']);
  }

}
