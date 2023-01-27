import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse, Role } from '../../interfaces/iuserlogin';
import { CartService } from '../../services/store/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { Subject, Subscription, takeUntil } from 'rxjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})

export class NavBarComponent implements OnInit, OnDestroy {

  @Input()
  visibleNav = true;

  cartQuantity = 0;

  isLogged!:boolean;

  isAdmin:Role = null!;

  private subscription: Subscription = new Subscription();

  private destroy$ = new Subject<any>();

  constructor(
    private router: Router,
    cartService:CartService,
    private authService:AuthService) {

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  ngOnInit(): void {
    this.authService.user$.pipe(takeUntil(this.destroy$)).subscribe((user: UserResponse) => {
      this.isLogged = true;
      this.isAdmin = user?.role;
    });
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
    this.isLogged = false;
  }

}
