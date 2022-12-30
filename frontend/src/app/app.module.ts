import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';



@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
