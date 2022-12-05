import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormLoginComponent } from './components/form/form-login.component';
import { LoginComponent } from './pages/login.component';
import { PublicRoutingModule } from '../public-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    PublicRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
