import { Component, Input, OnInit } from '@angular/core';

import { Carousel } from '../../../../shared/models/store/carrusel/carousel';
import { CarouselService } from '../../../../shared/services/store/carrusel/carousel.service';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.sass']
})
export class CarruselComponent implements OnInit {

  // sliders:Carousel[] = [];

  // @Input() height = 500;
  // @Input() isFullScreen = false;

  // private finalHeight: string | number = 0;
  // private currentPosition = 0;

  // constructor(private sliderService:CarouselService) {
  //   this.sliders = this.sliderService.getAll();
  //   this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`
  // }

  constructor(){}

  ngOnInit(): void {
      
  }

  // ngOnInit(): void {
  //   this.sliders.map(( i, index ) => {
  //     i.id = index;
  //   })
  // }

  // setCurrentPosition(position:number){
  //   this.currentPosition = position;
  //   this.sliders.find(i => i.id === 0).
  // }

}
