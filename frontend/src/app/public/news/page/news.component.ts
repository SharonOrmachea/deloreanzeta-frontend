import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  news:News[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
