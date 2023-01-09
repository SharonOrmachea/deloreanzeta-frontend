import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/store/cart/cart.service';
import { UserService } from '../../services/user/user.service';
import { UserResponse } from '../../interfaces/iUserLogin';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})

export class NavBarComponent implements OnInit {

  @Input()
  visibleNav = true;

  cartQuantity = 0;

  user!:UserResponse;

  constructor(
    private router: Router,
    cartService:CartService,
    private userService:UserService) {

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    // userService.userObservable.subscribe((newUser) => {
    //   this.user = newUser;
    // })
  }

  ngOnInit(): void {
  }

  paginaLogin(){
    this.router.navigate(['/login'])
  }

  paginaSignIn(){
    this.router.navigate(['/sign-in'])
  }

  onLogout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }

}
