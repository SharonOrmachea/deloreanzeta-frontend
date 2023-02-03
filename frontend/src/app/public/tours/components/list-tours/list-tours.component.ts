import { Component, OnInit } from '@angular/core';

import { ToursService } from 'src/app/shared/services/tours/tours.service';

import { Tours } from 'src/app/shared/models/tours/tours';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-tours',
  templateUrl: './list-tours.component.html',
  styleUrls: ['./list-tours.component.sass']
})
export class ListToursComponent implements OnInit {

  tours:Tours[] = [];

  constructor(
    private tourService:ToursService,
    private toastr:ToastrService
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

  

}
