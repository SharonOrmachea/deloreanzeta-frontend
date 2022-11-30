import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LoginModule { }
