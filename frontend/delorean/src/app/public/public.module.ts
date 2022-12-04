import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { IdentifyUserModule } from './identify-user/identify-user.module';





@NgModule({
  declarations: [

  ],
  imports: [
    PublicRoutingModule,
    HomeModule,
    LoginModule,
    SignInModule,
    IdentifyUserModule
  ]
})
export class PublicModule { }
