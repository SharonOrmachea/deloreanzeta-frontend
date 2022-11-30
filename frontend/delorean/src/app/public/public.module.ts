import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';



@NgModule({
  declarations: [

  ],
  imports: [
    PublicRoutingModule,
    HomeModule,
    LoginModule,
    SignInModule,
    SharedModule
  ]
})
export class PublicModule { }
