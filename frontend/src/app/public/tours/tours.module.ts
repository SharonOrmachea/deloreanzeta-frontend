import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './pages/tours.component';
import { ListToursComponent } from './components/list-tours/list-tours.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AdminToursModule } from '../../Admin/admin-tours/admin-tours.module';

// Date Import
import localePy from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePy, 'es');


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
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ]
})
export class ToursModule { }
