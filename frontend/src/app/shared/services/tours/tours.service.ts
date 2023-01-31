import { Injectable } from '@angular/core';
import { Tours } from '../../models/tours/tours';
import { sample_tours } from '../../../../data';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor() {}
  getAllTours():Tours[]{
    return sample_tours;
  }

  getToursId(toursId:string){
    return this.getAllTours().find(Tours => Tours.id == toursId) ?? new Tours();
  }



}
