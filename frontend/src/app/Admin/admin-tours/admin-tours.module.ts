import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ToursUpComponent } from './components/tours-up/tours-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { AdminListToursComponent } from './components/admin-list-tours/admin-list-tours.component';


@NgModule({
  declarations: [
    ToursUpComponent,
    AdminListToursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule
  ],
  exports: [
    ToursUpComponent,
    AdminListToursComponent
  ]
})
export class AdminToursModule { }
