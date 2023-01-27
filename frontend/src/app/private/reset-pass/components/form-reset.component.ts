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
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'), this.validatorService.checkPasswords('password')]],
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


  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.resetForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.resetForm);
  }

}
