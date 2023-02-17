import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';


@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.sass']
})

export class AllNewsComponent implements OnInit {

  news:News[] = [];

  p:any;

  constructor( private newsService:NewsService ) {
    this.p = 1;
  }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe(data => {
      this.news = data;
    }, error => {
      console.log(error);
    })
  }

}
