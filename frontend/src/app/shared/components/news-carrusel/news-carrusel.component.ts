import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-news-carrusel',
  templateUrl: './news-carrusel.component.html',
  styleUrls: ['./news-carrusel.component.sass'],
  encapsulation: ViewEncapsulation.None,

})
export class NewsCarruselComponent implements OnInit {

  news:News[] = [];

  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    navigation: true,
    pagination:false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      reverseDirection: true
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
      1680: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 4,
      }
    }
  }

  constructor(private newsService:NewsService, private toastr: ToastrService) {}


  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe(data => {
      this.news = data;
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      //console.log(error)
    })
  }



}
