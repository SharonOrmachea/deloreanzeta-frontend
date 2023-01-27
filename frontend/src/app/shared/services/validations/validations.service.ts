import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  generalValidator(control: FormControl, field: string){
    const generalRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    return generalRegex.test(control.value) ? null : { field: true};
  }

  emailValidator(control: FormControl){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(control.value) ? null : { field: true};
  }

  checkPasswords(form:FormGroup){
    const password = form.controls['password'].value;
    const confirmPassword = form.controls['confirmPassword'].value;

    if (password.value !== confirmPassword.value){
      return {
        matchPasswords: false
      };
    }
    return null;
  }

  getErrorMessage(field:string, form:FormGroup): string{
    let message = '';
    
    if (form.get(field)!.errors?.['required']){
      message = 'Debes ingresar un valor';
    }else if(form.get(field)!.hasError('pattern')){
      if(field == 'email'){
        message = 'El Email no es valido';
      }else if (field == 'password' || field == 'confirmPassword'){
        message = 'La contraseña no es valida';
      }
    }else if(form.get(field)?.hasError('minlength')){
      const minLength = form.get(field)!.errors?.['minlength'].requiredLength;
      message = `Este campo no puede tener menos de ${minLength} caracteres`;
    }

    return message;
  }

  isValidField(field:string, form:FormGroup): boolean{
    return (
      (form.get(field)!.touched ||
      form.get(field)!.dirty) &&
      !form.get(field)!.valid
    );
  }
}
