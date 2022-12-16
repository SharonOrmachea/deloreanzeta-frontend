import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

import { ResetPassComponent } from './pages/reset-pass.component';
import { FormResetComponent } from './components/form-reset.component';







@NgModule({
  declarations: [
    ResetPassComponent,
    FormResetComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ResetPassModule { }
