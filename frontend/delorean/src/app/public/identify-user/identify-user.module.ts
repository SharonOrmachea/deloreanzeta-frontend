import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { FormIdentifyComponent } from './components/form-identify.component';
import { IdentifyUserComponent } from './pages/identify-user.component';





@NgModule({
  declarations: [
    IdentifyUserComponent,
    FormIdentifyComponent
  ],
  imports: [
    SharedModule
  ]
})
export class IdentifyUserModule { }
