import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PublicRoutingModule } from '../public-routing.module';
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../../shared/material.module';

import { IdProductDirective } from './directive/id-product.directive';

import { StoreComponent } from './page/store.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ProductsComponent } from './components/all products/products.component';
import { IdProductComponent } from './components/id-product/id-product.component';



@NgModule({
  declarations: [
    StoreComponent,
    CarruselComponent,
    ProductsComponent,
    IdProductComponent,
    IdProductDirective
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    SwiperModule,
    NgxPaginationModule,
    MaterialModule
  ],
  providers: []
})
export class StoreModule { }
