import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Carousel } from '../../../../shared/models/store/carrusel/carousel';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BannerService } from 'src/app/shared/services/store/banner/banner.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class CarruselComponent implements OnInit {

  banners!:Carousel[];

  suscription!: Subscription;

  constructor(private bannerService:BannerService, private toastr:ToastrService,){}

  ngOnInit(): void {
    this.getAllBanners();

    this.suscription = this.bannerService.refreshBanner$.subscribe((res) =>{
      this.getAllBanners();
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
    });
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();
    //console.log('tour destruido');
  }

  getAllBanners(){}



}
