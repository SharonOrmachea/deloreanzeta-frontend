import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { News } from 'src/app/shared/models/news/news';
import { NewsService } from 'src/app/shared/services/news/news.service';
import { NewsUpComponent } from '../news-up/news-up.component';

@Component({
  selector: 'app-admin-list-news',
  templateUrl: './admin-list-news.component.html',
  styleUrls: ['./admin-list-news.component.sass']
})

export class AdminListNewsComponent implements OnInit {

  news:News[] = [];

  datosLocalStorage = JSON.parse(localStorage.getItem("user")!);
  tokenLocalStorage = this.datosLocalStorage.token;


  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenLocalStorage}`
  });

  constructor(
    private newsService:NewsService,
    private toastr:ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe(data => {
      this.news = data;
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      //console.log(error)
    })
  }

  openModal(news={}):void {
    this.dialog.open(NewsUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Noticia', news}
    });
  }

  deleteNews(id:any){
    this.newsService.deleteNews(id, this.headers).subscribe(data => {
      this.toastr.success('La noticia fue eliminada con exito', 'Noticia Eliminada');
      this.getAllNews();
    }, error => {
      this.toastr.error(error, 'Failed Delete');
    })
  }

}
