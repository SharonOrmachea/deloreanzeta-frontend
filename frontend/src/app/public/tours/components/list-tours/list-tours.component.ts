import { Tours } from './../../../../shared/models/tours/tours';
import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/services/tours/tours.service';


@Component({
  selector: 'app-list-tours',
  templateUrl: './list-tours.component.html',
  styleUrls: ['./list-tours.component.sass']
})
export class ListToursComponent implements OnInit {
   tours :Tours[] = [];

   
  constructor(private _tourservice:ToursService) {
    this.tours = this._tourservice.getAllTours();
   }

  ngOnInit(): void {
  }

}
