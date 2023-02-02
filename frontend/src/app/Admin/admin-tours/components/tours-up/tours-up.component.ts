import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';
import { ToursService } from '../../../../shared/services/tours/tours.service';


@Component({
  selector: 'app-tours-up',
  templateUrl: './tours-up.component.html',
  styleUrls: ['./tours-up.component.sass'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ]
})
export class ToursUpComponent implements OnInit {

  tourForm:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toursService: ToursService,
    private toastrService:ToastrService,
  ) {

    this.tourForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
      city: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  addTour(){
    if (this.tourForm.valid){
      const userValue = this.tourForm.value;
      this.toursService.newTour(userValue).subscribe((res) => {
        this.toastrService.success('Nueva fecha agregada a Tours', 'Fecha Agregada');
        this.tourForm.reset();
      }, (error) => {
        this.toastrService.error('No se pudo registrar su petición, compruebe los datos ingresados', 'Tours Failed');
      }
    );
    }
  }

  get formControls() {
    return this.tourForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.tourForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.tourForm);
  }

}
