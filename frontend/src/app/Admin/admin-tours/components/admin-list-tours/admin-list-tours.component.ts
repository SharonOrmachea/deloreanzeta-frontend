import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Tours } from 'src/app/shared/models/tours/tours';

import { ToastrService } from 'ngx-toastr';
import { ToursService } from 'src/app/shared/services/tours/tours.service';

import { ToursUpComponent } from '../tours-up/tours-up.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-list-tours',
  templateUrl: './admin-list-tours.component.html',
  styleUrls: ['./admin-list-tours.component.sass']
})
export class AdminListToursComponent implements OnInit {

  tours:Tours[] = [];

  suscription!: Subscription;

  constructor(
    private tourService:ToursService,
    private toastr:ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllTours();

    this.suscription = this.tourService.refreshTour$.subscribe((res) =>{
      this.getAllTours();
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
    });
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();
    //console.log('tour destruido');
  }

  getAllTours(){
    this.tourService.getAllTours().subscribe(data => {
      this.tours = data;
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      console.log(error)
    })
  }

  openModal(tour={}):void {
    this.dialog.open(ToursUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Fecha', tour}

    });
  }

  deleteTour(id:any){
    this.tourService.deleteTour(id).subscribe(data => {
      this.toastr.success('La fecha fue eliminado con exito', 'Fecha Eliminada');
      this.getAllTours();
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      console.log(error);
    })
  }

}
