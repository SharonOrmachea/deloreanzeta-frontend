import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './page/store.component';
import { CarruselComponent } from './components/carrusel.component';



@NgModule({
  declarations: [
    StoreComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
