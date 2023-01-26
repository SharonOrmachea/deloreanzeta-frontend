import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-identify',
  templateUrl: './form-identify.component.html',
  styleUrls: ['./form-identify.component.sass']
})
export class FormIdentifyComponent implements OnInit {

  identifyEmail:FormGroup;

  constructor(private router: Router) {
    this.identifyEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')])
    })

  }

  ngOnInit(): void {
  }

  continueToCode() {
    this.router.navigate(['recover/password'])
  }

  getErrorMessage(field:string): string{
    let message = '';

    if (this.identifyEmail.get(field)!.errors?.['required']){
      message = 'Debes ingresar un valor';
    }else if(this.identifyEmail.get(field)!.hasError('pattern')){
      if(field == 'email'){
        message = 'El Email no es valido';
      }
    }

    return message;
  }

  isValidField(field:string): boolean{
    return (
      (this.identifyEmail.get(field)!.touched ||
      this.identifyEmail.get(field)!.dirty) &&
      !this.identifyEmail.get(field)!.valid
    );
  }

}
