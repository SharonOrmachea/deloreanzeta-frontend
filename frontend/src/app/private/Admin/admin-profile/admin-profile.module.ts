import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAboutUsModule } from './components/admin-aboutUs/admin-about-us.module';
import { AdminGaleryModule } from './components/admin-galery/admin-galery.module';
import { AdminNewsModule } from './components/admin-news/admin-news.module';
import { AdminStoreModule } from './components/admin-store/admin-store.module';
import { AdminToursModule } from './components/admin-tours/admin-tours.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AdminProfileComponent } from './page/admin-profile.component';



@NgModule({
  declarations: [
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminAboutUsModule,
    AdminGaleryModule,
    AdminNewsModule,
    AdminStoreModule,
    AdminToursModule,
    MatTabsModule,
    MatButtonToggleModule
  ]
})
export class AdminProfileModule { }
