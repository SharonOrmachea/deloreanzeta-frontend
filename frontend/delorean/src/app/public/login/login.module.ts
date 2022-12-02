import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormLoginComponent } from './components/form/form-login.component';
import { LoginComponent } from './pages/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LoginModule { }
