import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdminListNewsComponent } from './components/admin-list-news/admin-list-news.component';
import { NewsUpComponent } from './components/news-up/news-up.component';

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [
    NewsUpComponent,
    AdminListNewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule,
    MatDialogModule,
  ],
  exports: [
    NewsUpComponent,
    AdminListNewsComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class AdminNewsModule { }
