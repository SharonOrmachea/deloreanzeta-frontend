import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from  '@angular/material-moment-adapter' ;
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'app-tours-up',
  templateUrl: './tours-up.component.html',
  styleUrls: ['./tours-up.component.sass'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class ToursUpComponent implements OnInit {

  tourForm:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
  ) {

    this.tourForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: [''],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
      information: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  addTour(){}

}
