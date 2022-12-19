import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { ResetPassModule } from './reset-pass/reset-pass.module';
import { PublicRoutingModule } from '../public/public-routing.module';
import { CartComponent } from './cart/page/cart.component';








@NgModule({
  declarations: [

  
    CartComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PublicRoutingModule,
    ResetPassModule
  ]
})
export class PrivateModule { }
