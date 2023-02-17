import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FormLoginComponent } from './components/form/form-login.component';
import { LoginComponent } from './pages/login.component';
import { FormIdentifyComponent } from './components/form-identify-user/form-identify.component';


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
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class LoginModule { }
