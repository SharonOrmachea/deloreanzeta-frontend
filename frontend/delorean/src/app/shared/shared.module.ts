import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent
  ]
})
export class SharedModule { }
