import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ToursService } from 'src/app/shared/services/tours/tours.service';

import { Tours } from 'src/app/shared/models/tours/tours';


@Component({
  selector: 'app-list-tours',
  templateUrl: './list-tours.component.html',
  styleUrls: ['./list-tours.component.sass']
})
export class ListToursComponent implements OnInit {

  // tours :Tours[] = [];

  constructor(
    private tourService:ToursService
    ) {

    let toursObservable:Observable<Tours[]>;

    toursObservable = this.tourService.getAllTours();

   }

  ngOnInit(): void {
  }

}
