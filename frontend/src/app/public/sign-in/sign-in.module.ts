import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { SignInComponent } from './pages/sign-in.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';



@NgModule({
  declarations: [
    SignInComponent,
    FormSignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SignInModule { }
