import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ShortcutNewsComponent } from './components/shortcut-news/shortcut-news.component';
import { ShortcutStoreComponent } from './components/shortcut-store/shortcut-store.component';



@NgModule({
  declarations: [
    BannerComponent,
    ShortcutNewsComponent,
    ShortcutStoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
