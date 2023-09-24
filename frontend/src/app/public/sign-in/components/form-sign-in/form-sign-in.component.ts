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
      telephone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\wáéíóúüñ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/i)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\wáéíóúüñ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/i), this.validatorService.checkPasswords('password')]],
      termsAndConditions: [false, Validators.requiredTrue]
      },
    );

  }


  ngOnInit(): void {}

  registerNewUser(){
    //console.log('form is valid?: ', this.signInForm.valid)

    if (this.signInForm.valid){
      const userValue = {
        name: this.signInForm.get('name')?.value,
        lastname: this.signInForm.get('lastname')?.value,
        telephone: this.signInForm.get('telephone')?.value,
        email: this.signInForm.get('email')?.value,
        password: this.signInForm.get('password')?.value
      };

      this.userService.newUser(userValue).subscribe((res) => {
        this.toastrService.success('Inicie Sesion con su cuenta', 'Registro Exitoso');
        this.router.navigate(['/login']);
        this.signInForm.reset();
      }, (error) => {
        this.toastrService.error('No se pudo registrar su usuario, compruebe los datos ingresados y/o intentelo de nuevo más tarde', 'Sign In Failed');
        this.toastrService.error(error, 'Sign In Failed');
        //console.error(error)
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
