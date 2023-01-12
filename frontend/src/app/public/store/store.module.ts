import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SwiperModule } from 'swiper/angular';

import { StoreComponent } from './page/store.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ProductsComponent } from './components/all products/products.component';
import { IdProductComponent } from './components/id-product/id-product.component';

import { IdProductDirective } from './directive/id-product.directive';

import { AdminStoreModule } from 'src/app/Admin/admin-store/admin-store.module';



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
    SharedModule,
    AdminStoreModule,
    SwiperModule,
  ],
  providers: []
})
export class StoreModule { }
