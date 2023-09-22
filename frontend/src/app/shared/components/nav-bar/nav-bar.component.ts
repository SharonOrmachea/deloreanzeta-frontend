import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/store/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})

export class NavBarComponent implements OnInit, OnDestroy {

  @Input()
  visibleNav = true;

  cartQuantity = 0;

  private subscription: Subscription = new Subscription();

  isLogged:boolean = false;

  private destroy$ = new Subject<any>();


  constructor(
    private router: Router,
    cartService:CartService,
    private authService:AuthService) {

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });

    this.isLogged = this.authService.isLogged;

    //console.log('este es del nav ' + this.isLogged)
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
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
