import { Component, OnInit } from '@angular/core';

import { ToursService } from 'src/app/shared/services/tours/tours.service';

import { Tours } from 'src/app/shared/models/tours/tours';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-tours',
  templateUrl: './list-tours.component.html',
  styleUrls: ['./list-tours.component.sass']
})
export class ListToursComponent implements OnInit {

  tours:Tours[] = [];

  suscription!: Subscription;

  constructor(
    private tourService:ToursService,
    private toastr: ToastrService
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
      console.log(data)
    }, error => {
      this.toastr.error(error, 'Se produjo un error');
      console.log(error)
    })
  }


}



