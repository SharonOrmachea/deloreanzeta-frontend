import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Tours } from 'src/app/shared/models/tours/tours';

import { ToastrService } from 'ngx-toastr';
import { ToursService } from 'src/app/shared/services/tours/tours.service';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';

import { ToursUpComponent } from '../tours-up/tours-up.component';

@Component({
  selector: 'app-admin-list-tours',
  templateUrl: './admin-list-tours.component.html',
  styleUrls: ['./admin-list-tours.component.sass']
})
export class AdminListToursComponent implements OnInit {

  tours:Tours[] = [];



  constructor(
    private tourService:ToursService,
    private toastr:ToastrService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    this.getAllTours();
  }

  getAllTours(){
    this.tourService.getAllTours().subscribe(data => {
      this.tours = data;
    }, error => {
      console.log(error)
    })
  }

  openModal(tour={}):void {
    console.log('Tour->', tour);
    this.dialog.open(ToursUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Fecha', tour}

    });

    // dialogRef.afterClosed().subscribe
  }

  deleteTour(id:any){
    this.tourService.deleteTour(id).subscribe(data => {
      this.toastr.success('La fecha fue eliminado con exito', 'Fecha Eliminada');
      this.getAllTours();
    }, error => {
      console.log(error);
    })
  }

}
