import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { HiringComponent } from './page/hiring.component';
import { HiringFormComponent } from './components/hiring-form/hiring-form.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    HiringComponent,
    HiringFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HiringModule { }
