import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormLoginComponent } from './components/form/form-login.component';
import { LoginComponent } from './pages/login.component';
import { FormIdentifyComponent } from './components/form-identify-user/form-identify.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    FormIdentifyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
