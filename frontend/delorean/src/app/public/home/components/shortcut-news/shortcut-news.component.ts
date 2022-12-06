import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from '../../../../shared/services/news/news.service';

@Component({
  selector: 'app-shortcut-news',
  templateUrl: './shortcut-news.component.html',
  styleUrls: ['./shortcut-news.component.sass']
})
export class ShortcutNewsComponent implements OnInit {

  news:News[] = [];

  constructor(private noticiaService:NewsService) {
    this.news = this.noticiaService.getAll();
   }

  ngOnInit(): void {
  }

}
