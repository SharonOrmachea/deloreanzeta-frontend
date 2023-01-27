import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';


@Component({
  selector: 'app-form-identify',
  templateUrl: './form-identify.component.html',
  styleUrls: ['./form-identify.component.sass']
})
export class FormIdentifyComponent implements OnInit {

  identifyEmail:FormGroup;

  constructor(
    private router: Router,
    private validatorService:ValidationsService
    ) {

    this.identifyEmail = new FormGroup({
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator])
    })

  }

  ngOnInit(): void {
  }

  toLogin() {
    this.router.navigate(['/login'])
  }

  get formControls() {
    return this.identifyEmail.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.identifyEmail);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.identifyEmail);
  }

}
