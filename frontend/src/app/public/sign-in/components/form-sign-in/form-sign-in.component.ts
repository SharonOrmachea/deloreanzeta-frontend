import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';


@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.sass']
})

export class FormSignInComponent implements OnInit {

  hide = true;
  hide2 = true;

  signInForm!:FormGroup;

  isSubmitted = false;

  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastrService:ToastrService,
    private validatorService:ValidationsService
    ) {

    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'), this.validatorService.checkPasswords('password')]],
      termsAndConditions: [false, Validators.requiredTrue]
    },
    );

  }


  ngOnInit(): void {}

  registerNewUser(){

    this.isSubmitted = true;

    if (this.signInForm.valid){
      const userValue = this.signInForm.value;
      this.userService.newUser(userValue).subscribe(() => {
        this.toastrService.success('Inicie Sesion con su cuenta', 'Registro Exitoso');
        this.router.navigate(['/login']);
        this.signInForm.reset();
      }, () => {
        this.toastrService.error('No se pudo registrar su usuario, compruebe los datos ingresados', 'Sign-In Failed');
      }
    );
    }
  }

  get formControls() {
    return this.signInForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.signInForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.signInForm);
  }



}
