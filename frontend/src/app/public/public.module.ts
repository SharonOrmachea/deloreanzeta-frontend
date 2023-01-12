import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { PrivateRoutingModule } from '../private/private-routing.module';
import { StoreModule } from './store/store.module';
import { HiringModule } from './hiring/hiring.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PrivateRoutingModule,
    HomeModule,
    LoginModule,
    SignInModule,
    StoreModule,
    HiringModule,

  ],
  providers: [

  ]
})
export class PublicModule { }
