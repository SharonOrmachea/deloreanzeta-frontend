import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PublicRoutingModule } from '../public-routing.module';

import { StoreComponent } from './page/store.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [
    StoreComponent,
    CarruselComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
  providers: []
})
export class StoreModule { }
