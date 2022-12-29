import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { ResetPassModule } from './reset-pass/reset-pass.module';
import { PublicRoutingModule } from '../public/public-routing.module';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './Admin/admin.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PublicRoutingModule,
    ResetPassModule,
    CartModule,
    AdminModule
  ]
})
export class PrivateModule { }
