import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.sass']
})
export class AllNewsComponent implements OnInit {

  news:News[] = []

  first:any[] = [
    {
      id: '3',
      name: 'Soy una noticia',
      date: '05/12/2022',
      description: 'Soy una descripcion breve de la noticia. Esperemos que el equipo de tester me apruebe la sección, guiño guiño 😉',
      imageUrl: './assets/news/news3.jpg'
    }
  ]

  constructor(private newService:NewsService) {
    this.news = this.newService.getAll();
  }

  ngOnInit(): void {
  }

}
