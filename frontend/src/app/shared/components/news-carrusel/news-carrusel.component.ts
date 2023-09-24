import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-news-carrusel',
  templateUrl: './news-carrusel.component.html',
  styleUrls: ['./news-carrusel.component.sass'],
  encapsulation: ViewEncapsulation.None,

})
export class NewsCarruselComponent implements OnInit {

  news:News[] = [];

  constructor(private newsService:NewsService, private toastr: ToastrService) {

  }


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
