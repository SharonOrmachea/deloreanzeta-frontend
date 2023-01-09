import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerUpComponent } from './banner-up/banner-up.component';
import { CategoriesUpComponent } from './categories-up/categories-up.component';
import { ProductUpComponent } from './product-up/product-up.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    BannerUpComponent,
    CategoriesUpComponent,
    ProductUpComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,


  ],
  exports: [
    BannerUpComponent,
    CategoriesUpComponent,
    ProductUpComponent,
    EditProductComponent
  ]
})
export class AdminStoreModule { }
