import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.sass']
})
export class NavBarLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  paginaLogin(){
    this.router.navigate(['/login'])
  }

  paginaSignIn(){
    this.router.navigate(['/sign-in'])
  }

}
