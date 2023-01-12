import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStoreModule } from './admin-store/admin-store.module';
import { AdminStoreComponent } from './admin-store/page/admin-store.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminStoreModule
  ],
  exports: [
    AdminStoreComponent
  ]
})
export class AdminModule { }
