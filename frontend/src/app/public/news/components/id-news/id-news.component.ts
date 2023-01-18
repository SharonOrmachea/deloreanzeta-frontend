import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'app-id-news',
  templateUrl: './id-news.component.html',
  styleUrls: ['./id-news.component.sass']
})
export class IdNewsComponent implements OnInit {

  news:News[] = []

  constructor(private _servicio: NewsService) {
    this.news = this._servicio.getAll()
  }

  ngOnInit(): void {
  }

}
