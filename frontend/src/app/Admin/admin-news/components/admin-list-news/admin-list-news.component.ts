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
      console.log(error)
    })
  }

  openModal(news={}):void {
    this.dialog.open(NewsUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Noticia', news}

    });
  }

  deleteTour(id:any){
    this.newsService.deleteNews(id).subscribe(data => {
      this.toastr.success('La fecha fue eliminado con exito', 'Fecha Eliminada');
      this.getAllNews();
    }, error => {
      this.toastr.success(error, 'Failed Delete');
    })
  }

}
