import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from '../../interfaces/iuserlogin';
import { CartService } from '../../services/store/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})

export class NavBarComponent implements OnInit, OnDestroy {

  @Input()
  visibleNav = true;

  cartQuantity = 0;

  isLogged = false;

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    cartService:CartService,
    private authService:AuthService) {

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });

    // userService.userObservable.subscribe((newUser) => {
    //   this.user = newUser;
    // })
  }

  ngOnInit(): void {
    this.subscription.add(
      this.authService.isLogged.subscribe( res => this.isLogged = res)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  paginaLogin(){
    this.router.navigate(['/login']);
  }

  paginaSignIn(){
    this.router.navigate(['/sign-in']);
  }

  onLogout():void {
    this.authService.logout();
  }

}
