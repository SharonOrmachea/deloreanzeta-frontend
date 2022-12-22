import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PrivateRoutingModule } from '../private-routing.module';

import { CartComponent } from './page/cart.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';


@NgModule({
  declarations: [
    CartComponent,
    CartProductsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
