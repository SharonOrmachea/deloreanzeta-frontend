import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';

@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.sass']
})
export class FormResetComponent implements OnInit {

  hide = true;
  hide2 = true;

  resetForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validatorService:ValidationsService
    ) {

    this.resetForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, 
    );
   }

  ngOnInit(): void {
  }


  continueToCode(){

  }

  get formControls() {
    return this.resetForm.controls;
  }

  isValidField(field:string): boolean{
    return (
      (this.resetForm.get(field)!.touched ||
      this.resetForm.get(field)!.dirty) &&
      !this.resetForm.get(field)!.valid
    );
  }

  getErrorMessage(field:string): string{

    let errorMessage!: string;

    if (this.resetForm.get(field)!.errors?.['required']){
      errorMessage = 'Debes ingresar un valor';
    }else if(this.resetForm.get(field)!.hasError('pattern')){
      if(field == 'email'){
        errorMessage = 'El Email no es valido';
      }else{
        errorMessage = 'La contraseña no es valida';
      }

    }else if(this.resetForm.get(field)?.hasError('minlength')){
      const minLength = this.resetForm.get(field)!.errors?.['minlength'].requiredLength;
      errorMessage = `Este campo no puede tener menos de ${minLength} caracteres`;
    }

    return errorMessage;
  }



}
