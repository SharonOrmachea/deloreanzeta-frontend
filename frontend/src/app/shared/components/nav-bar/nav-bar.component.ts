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

  userName:string = 'user';

  private destroy$ = new Subject<any>();

  constructor(
    private router: Router,
    private cartService:CartService,
    private authService:AuthService) {

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });

    console.log('isLogged: ' + this.isLogged);
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged;

    if(this.isLogged === true){
      this.userName = this.authService.userValue().name;
    } else{
      this.userName = '';
    }
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
