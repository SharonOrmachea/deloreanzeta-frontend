import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';

import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './page/user.component';




@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class UserModule { }
