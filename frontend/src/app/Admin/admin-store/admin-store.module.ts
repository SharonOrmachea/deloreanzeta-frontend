import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { BannerUpComponent } from './components/banner/banner-up/banner-up.component';
import { CategoriesUpComponent } from './components/categories/categories-up/categories-up.component';
import { ProductUpComponent } from './components/products/product-up/product-up.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { AdminStoreComponent } from './page/admin-store.component';




@NgModule({
  declarations: [
    BannerUpComponent,
    CategoriesUpComponent,
    ProductUpComponent,
    ListProductComponent,
    AdminStoreComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDialogModule,
    ToastrModule.forRoot(),

  ],
  exports: [
    BannerUpComponent,
    CategoriesUpComponent,
    ProductUpComponent,
    ListProductComponent,
    AdminStoreComponent
  ],
})
export class AdminStoreModule { }
