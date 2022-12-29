import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicRoutingModule } from '../public-routing.module';

import { FormLoginComponent } from './components/form/form-login.component';
import { LoginComponent } from './pages/login.component';
import { FormCodeUserComponent } from './components/form-code-user/form-code-user.component';
import { FormIdentifyComponent } from './components/form-identify-user/form-identify.component';



@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    FormCodeUserComponent,
    FormIdentifyComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
