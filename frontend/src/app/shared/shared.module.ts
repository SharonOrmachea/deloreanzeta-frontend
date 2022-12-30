import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarLoginComponent } from './components/nav-bar-login/nav-bar-login.component';
import { ProductsCarruselComponent } from '../shared/components/products-carrusel/products-carrusel.component';
import { NewsCarruselComponent } from './components/news-carrusel/news-carrusel.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    NavBarLoginComponent,
    ProductsCarruselComponent,
    NewsCarruselComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    SwiperModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  exports: [
    RouterModule,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent,
    NavBarLoginComponent,
    ProductsCarruselComponent,
    NewsCarruselComponent,
    TitleComponent
  ],
  providers: []
})
export class SharedModule { }
