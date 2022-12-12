import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home.component';

import { ProductService } from '../../shared/services/store/productos/product.service';





@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ProductService]
})
export class HomeModule { }
