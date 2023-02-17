import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { IdProductDirective } from './directive/id-product.directive';

import { StoreComponent } from './page/store.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ProductsComponent } from './components/all products/products.component';
import { IdProductComponent } from './components/id-product/id-product.component';
import { CategoriesComponent } from './components/categories/categories.component';


import { AdminStoreModule } from 'src/app/Admin/admin-store/admin-store.module';



@NgModule({
  declarations: [
    StoreComponent,
    CarruselComponent,
    ProductsComponent,
    IdProductComponent,
    IdProductDirective,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminStoreModule,
    SwiperModule,
    SwiperModule,
    NgxPaginationModule,

  ],
  providers: []
})
export class StoreModule { }
