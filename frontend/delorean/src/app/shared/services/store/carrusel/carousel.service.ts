import { Injectable } from '@angular/core';
import { sample_carousel } from '../../../../../data';
import { Carousel } from '../../../models/store/carrusel/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getAll():Carousel[]{
    return sample_carousel;
  }
}
