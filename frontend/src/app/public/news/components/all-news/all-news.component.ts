import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';


@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.sass']
})

export class AllNewsComponent implements OnInit {

  news:News[] = [];

  suscription!: Subscription;

  p:any;

  constructor( private newsService:NewsService, private toastr: ToastrService ) {
    this.p = 1;
  }

  ngOnInit(): void {
    this.getAllNews();

    this.suscription = this.newsService.refreshNews$.subscribe((res) =>{
      this.getAllNews();
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
    });
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();
    //console.log('tour destruido');
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe(data => {
      this.news = data;
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      //console.log(error);
    })
  }

}
