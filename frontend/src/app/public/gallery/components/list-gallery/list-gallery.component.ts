import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'app-list-gallery',
  templateUrl: './list-gallery.component.html',
  styleUrls: ['./list-gallery.component.sass']
})
export class ListGalleryComponent implements OnInit {

  news:News[] = [];

  constructor( private _servicio:NewsService ) {

    this.news = this._servicio.getAll();
  }

  ngOnInit(): void {
  }

}
