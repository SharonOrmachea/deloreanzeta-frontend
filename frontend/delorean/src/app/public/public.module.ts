import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { PrivateRoutingModule } from '../private/private-routing.module';





@NgModule({
  declarations: [

  ],
  imports: [
    PublicRoutingModule,
    PrivateRoutingModule,
    HomeModule,
    LoginModule,
    SignInModule
  ]
})
export class PublicModule { }
