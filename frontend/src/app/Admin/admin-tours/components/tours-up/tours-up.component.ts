import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';
import { ToursService } from '../../../../shared/services/tours/tours.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';


enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-tours-up',
  templateUrl: './tours-up.component.html',
  styleUrls: ['./tours-up.component.sass'],
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
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    if(this.data?.tour.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Fecha';
      this.tourForm.get('date')?.setValidators(null);
      this.tourForm.get('place')?.setValidators(null);
      this.tourForm.get('city')?.setValidators(null);
      this.pathFormData();
    }
  }

  onKeypressEvent($event:any){
    $event.preventDefault();
  }

  formatDateToString(){
    const dateForm = this.tourForm.get('date')?.value;
    const dateString = dateForm.format('YYYY-MM-DDTHH:mm:ss');

    this.tourForm.patchValue({ date: dateString});
  }

  saveTour(){
    if(this.actionToDo == Action.NEW){
      this.formatDateToString();
      let valueTour = this.tourForm.value;
      this.toursService.newTour(valueTour).subscribe((res) => {
        this.toastr.success('Nueva fecha agregada a Tours', 'Fecha Agregada');
        this.tourForm.reset();
      }, (error) => {
        this.toastr.error(error, 'Tours Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      let valueTour = this.tourForm.value;
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
      date: this.data?.tour?.date,
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
