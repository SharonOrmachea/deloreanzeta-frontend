import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { BannerComponent } from './components/banner/banner.component';
import { ShortcutNewsComponent } from './components/shortcut-news/shortcut-news.component';
import { ShortcutStoreComponent } from './components/shortcut-store/shortcut-store.component';
import { HomeComponent } from './pages/home.component';



@NgModule({
  declarations: [
    BannerComponent,
    ShortcutNewsComponent,
    ShortcutStoreComponent,
    HomeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
