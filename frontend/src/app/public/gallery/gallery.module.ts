import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ListGalleryComponent } from './components/list-gallery/list-gallery.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    GalleryComponent,
    ListGalleryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GalleryModule { }
