import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tours } from 'src/app/shared/models/tours/tours';
import { ToursService } from 'src/app/shared/services/tours/tours.service';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';

@Component({
  selector: 'app-admin-list-tours',
  templateUrl: './admin-list-tours.component.html',
  styleUrls: ['./admin-list-tours.component.sass']
})
export class AdminListToursComponent implements OnInit {

  tours:Tours[] = [];

  toursForm:FormGroup;

  constructor(
    private tourService:ToursService,
    private toastr:ToastrService,
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    ) {

      this.toursForm = this.formBuilder.group({
        date: ['', [Validators.required]],
        place: ['', [Validators.required]],
        city: ['', [Validators.required]],
      })

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

  editTour(){}

  deleteTour(id:any){
    this.tourService.deleteTour(id).subscribe(data => {
      this.toastr.success('El tour fue eliminado con exito', 'Producto Eliminado');
      this.getAllTours();
    }, error => {
      console.log(error);
    })
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.toursForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.toursForm);
  }

}
