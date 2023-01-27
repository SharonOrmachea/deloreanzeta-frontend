import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';

@Component({
  selector: 'app-hiring-form',
  templateUrl: './hiring-form.component.html',
  styleUrls: ['./hiring-form.component.sass']
})
export class HiringFormComponent implements OnInit {

  hiringForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService:ToastrService,
    private validatorService:ValidationsService
  ) {

    this.hiringForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      business: ['', [Validators.required, Validators.minLength(3)]],
      message: ['']
      },
    );
  }

  ngOnInit(): void {

  }

  sendHiring(){}

  get formControls() {
    return this.hiringForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.hiringForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.hiringForm);
  }

}
