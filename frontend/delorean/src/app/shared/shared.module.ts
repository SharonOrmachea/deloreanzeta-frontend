import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarLoginComponent } from './components/nav-bar-login/nav-bar-login.component';









@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    NavBarLoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent,
    NavBarLoginComponent
  ],
  providers: []
})
export class SharedModule { }
