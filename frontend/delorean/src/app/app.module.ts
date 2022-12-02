import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';




@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
