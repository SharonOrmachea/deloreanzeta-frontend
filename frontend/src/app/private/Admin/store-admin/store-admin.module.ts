import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { StoreAdminComponent } from './pages/store-admin.component';
import { BannerUpComponent } from './components/banner-up/banner-up.component';
import { CategoriesUpComponent } from './components/categories-up/categories-up.component';
import { ProductUpComponent } from './components/product-up/product-up.component';



@NgModule({
  declarations: [
    StoreAdminComponent,
    BannerUpComponent,
    CategoriesUpComponent,
    ProductUpComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StoreAdminModule { }
