import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './page/news.component';
import { SharedModule } from '../../shared/shared.module';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { IdNewsComponent } from './components/id-news/id-news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminNewsModule } from '../../Admin/admin-news/admin-news.module';


@NgModule({
  declarations: [
    NewsComponent,
    AllNewsComponent,
    IdNewsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    AdminNewsModule
  ]
})
export class NewsModule { }
