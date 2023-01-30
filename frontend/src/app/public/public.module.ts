import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { PrivateRoutingModule } from '../private/private-routing.module';
import { StoreModule } from './store/store.module';
import { HiringModule } from './hiring/hiring.module';
import { NewsModule } from './news/news.module';
import { ToursModule } from './tours/tours.module';
import { GalleryModule } from './gallery/gallery.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsModule } from './about-us/about-us.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PrivateRoutingModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    SignInModule,
    StoreModule,
    HiringModule,
    NewsModule,
    ToursModule,
    GalleryModule,
    AboutUsModule
  ],
  providers: [

  ]
})
export class PublicModule { }
