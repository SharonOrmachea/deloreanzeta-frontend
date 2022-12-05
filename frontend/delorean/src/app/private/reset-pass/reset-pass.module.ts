import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ResetPassComponent } from './pages/reset-pass.component';
import { FormResetComponent } from './components/form-reset.component';






@NgModule({
  declarations: [
    ResetPassComponent,
    FormResetComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ResetPassModule { }
