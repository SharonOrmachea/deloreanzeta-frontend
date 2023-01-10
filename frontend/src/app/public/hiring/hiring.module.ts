import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    SharedModule
  ]
})
export class HiringModule { }
