import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { PublicRoutingModule } from '../public/public-routing.module';
import { PrivateRoutingModule } from '../private/private-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsCarruselComponent } from '../shared/components/products-carrusel/products-carrusel.component';
import { NewsCarruselComponent } from './components/news-carrusel/news-carrusel.component';
import { TitleComponent } from './components/title/title.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    ProductsCarruselComponent,
    NewsCarruselComponent,
    TitleComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    PublicRoutingModule,
    PrivateRoutingModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent,
    ProductsCarruselComponent,
    NewsCarruselComponent,
    TitleComponent,
    LoadingComponent,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: []
})
export class SharedModule { }
