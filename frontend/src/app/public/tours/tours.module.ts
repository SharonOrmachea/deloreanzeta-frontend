import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './pages/tours.component';
import { ListToursComponent } from './components/list-tours/list-tours.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AdminToursModule } from '../../Admin/admin-tours/admin-tours.module';




@NgModule({
  declarations: [
    ToursComponent,
    ListToursComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    AdminToursModule
  ]
})
export class ToursModule { }
