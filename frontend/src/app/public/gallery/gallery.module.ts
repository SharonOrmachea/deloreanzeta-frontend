import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ListGalleryComponent } from './components/list-gallery/list-gallery.component';
import { SharedModule } from '../../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ListGalleryComponent,
    CarrouselComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    NgbModule,
  ]
})
export class GalleryModule { }
