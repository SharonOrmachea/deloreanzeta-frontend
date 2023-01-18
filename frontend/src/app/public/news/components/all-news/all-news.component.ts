import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.sass']
})
export class AllNewsComponent implements OnInit {

  news:News[] = [];

  constructor( private _servicio:NewsService ) {

    this.news = this._servicio.getAll();

  
  }

  ngOnInit(): void {
  }

}
