import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'app-id-news',
  templateUrl: './id-news.component.html',
  styleUrls: ['./id-news.component.sass']
})
export class IdNewsComponent implements OnInit {

  news:News[] = []

  new!:News[];

  constructor(activatedRoute:ActivatedRoute,
              private newService:NewsService) {
    // activatedRoute.params.subscribe((params) => {
    //   if(params['id'])
    //   this.new = newService.getNewById(params['id']);
    // })
  }

  ngOnInit(): void {
  }

}
