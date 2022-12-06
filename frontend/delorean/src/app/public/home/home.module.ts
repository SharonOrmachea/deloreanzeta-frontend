import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


import { BannerComponent } from './components/banner/banner.component';
import { ShortcutNewsComponent } from './components/shortcut-news/shortcut-news.component';
import { ShortcutStoreComponent } from './components/shortcut-store/shortcut-store.component';
import { HomeComponent } from './pages/home.component';

import { ProductService } from '../../shared/services/store/product.service';





@NgModule({
  declarations: [
    BannerComponent,
    ShortcutNewsComponent,
    ShortcutStoreComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ProductService]
})
export class HomeModule { }
