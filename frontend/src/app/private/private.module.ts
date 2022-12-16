import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { ResetPassModule } from './reset-pass/reset-pass.module';
import { PublicRoutingModule } from '../public/public-routing.module';








@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PublicRoutingModule,
    ResetPassModule
  ]
})
export class PrivateModule { }
