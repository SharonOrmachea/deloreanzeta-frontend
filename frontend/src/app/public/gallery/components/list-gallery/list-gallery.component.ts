import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Sources } from 'src/app/shared/models/gallery/gallery';
import { GalleryService } from 'src/app/shared/services/gallery/gallery.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-list-gallery',
  templateUrl: './list-gallery.component.html',
  styleUrls: ['./list-gallery.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ListGalleryComponent implements OnInit {

  // sources:Sources[] = [];

  sources!:Sources[];

  constructor( private _servicio:GalleryService ) {

    this.sources = this._servicio.getAll();
    
  }

  ngOnInit(): void {
  }

}
