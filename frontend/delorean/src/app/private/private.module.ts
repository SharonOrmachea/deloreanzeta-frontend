import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private-routing.module';
import { ResetPassModule } from './reset-pass/reset-pass.module';
import { PublicRoutingModule } from '../public/public-routing.module';







@NgModule({
  declarations: [

  ],
  imports: [
    PrivateRoutingModule,
    PublicRoutingModule,
    ResetPassModule
  ]
})
export class PrivateModule { }
