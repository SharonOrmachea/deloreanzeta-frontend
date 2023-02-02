import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ToursUpComponent } from './components/tours-up/tours-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ToursUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule
  ],
  exports: [
    ToursUpComponent
  ]
})
export class AdminToursModule { }
