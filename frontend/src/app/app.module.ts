import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';



@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
