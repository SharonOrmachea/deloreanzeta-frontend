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

  new!:News;

  constructor(private activatedRoute:ActivatedRoute,
              private newService:NewsService) {
    this.activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.new = this.newService.getNewById(params['id'])})
  }

  ngOnInit(): void {
  }

}
