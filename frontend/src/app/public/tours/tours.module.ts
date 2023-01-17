import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './pages/tours.component';
import { ListToursComponent } from './components/list-tours/list-tours.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ToursComponent,
    ListToursComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToursModule { }
