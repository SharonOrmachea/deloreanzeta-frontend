import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStoreModule } from './admin-store/admin-store.module';
import { AdminNewsModule } from './admin-news/admin-news.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminStoreModule,
    AdminNewsModule
  ],
  exports: [
    AdminStoreModule,
    AdminNewsModule
  ]
})
export class AdminModule { }
