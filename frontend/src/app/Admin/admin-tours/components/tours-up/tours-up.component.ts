import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';
import { ToursService } from '../../../../shared/services/tours/tours.service';

import { DatePipe } from '../../../../shared/pipes/date.pipe';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-tours-up',
  templateUrl: './tours-up.component.html',
  styleUrls: ['./tours-up.component.sass'],
  providers: [ DatePipe ]
})

export class ToursUpComponent implements OnInit {

  tourForm:FormGroup;

  date = new Date();

  actionToDo = Action.NEW;

  constructor(
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toursService: ToursService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.tourForm = this.formBuilder.group({
      date: [''],
      place: ['', [Validators.required]],
      city: ['', [Validators.required]],
    })

  }

  ngOnInit(): void {
    if(this.data?.tour.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.pathFormData();
    }
  }

  formatDate(){
    let dateForm = this.tourForm.get('date')?.value;
    let dateObject = new Date(dateForm);
    let formatDate = dateObject.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const stringDate = formatDate + '';
    this.tourForm.patchValue({ date: stringDate});
  }

  saveTour(){
    this.formatDate();
    let valueTour = this.tourForm.value;
    console.log(valueTour)
    console.log(this.actionToDo == Action.NEW)
    if(this.actionToDo == Action.NEW){
      this.toursService.newTour(valueTour).subscribe((res) => {
        console.log('crear')
        this.toastr.success('Nueva fecha agregada a Tours', 'Fecha Agregada');
        this.tourForm.reset();
      }, (error) => {
        this.toastr.error(error, 'Tours Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      console.log('editar')
      const tourId = this.data?.tour?.id;
      this.toursService.updateTour(tourId, valueTour).subscribe((res) => {
        this.toastr.success('La fecha fue editado con exito', 'Fecha Editada');
      }, error => {
        console.log(error);
      })
    }

  }

  private pathFormData():void {
    this.tourForm.patchValue({
      place: this.data?.tour?.place,
      city: this.data?.tour?.city
    })
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
