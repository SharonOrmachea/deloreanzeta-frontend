import { Injectable } from '@angular/core';
import { sample_news } from '../../../../data';
import { News } from '../../models/news/news';


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor() { }

  getAll():News[]{
    return sample_news;
  }

  getNewById(elementId:string){
    return this.getAll().find(i => i.id == elementId) ?? new News();
  }

}
