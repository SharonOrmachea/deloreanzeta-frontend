import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreAdminModule } from './store-admin/store-admin.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreAdminModule
  ]
})
export class AdminModule { }
