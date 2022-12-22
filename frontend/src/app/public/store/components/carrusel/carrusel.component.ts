import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Carousel } from '../../../../shared/models/store/carrusel/carousel';
import { CarouselService } from '../../../../shared/services/store/carrusel/carousel.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class CarruselComponent implements OnInit {

  banners!:Carousel[];

  constructor(private carouselService:CarouselService){
    this.banners = this.carouselService.getAll()
  }

  ngOnInit(): void {

  }



}
