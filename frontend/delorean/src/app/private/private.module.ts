import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private-routing.module';
import { ResetPassModule } from './reset-pass/reset-pass.module';







@NgModule({
  declarations: [

  ],
  imports: [
    PrivateRoutingModule,
    ResetPassModule
  ]
})
export class PrivateModule { }
