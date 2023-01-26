import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { UserService } from '../../../../shared/services/user/user.service';
import { IUserRegister } from '../../../../shared/interfaces/iUserRegister';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.sass']
})

export class FormSignInComponent implements OnInit {

  hide = true;
  hide2 = true;

  signInForm!:FormGroup;

  actionToDo = Action.NEW;

  isSubmitted = false;

  returnUrl = '';

  private subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastrService:ToastrService
    ) {

    this.signInForm = this.formBuilder.group({
      name: ['', ],
      lastname: ['', ],
      telephone: ['', ],
      email: ['', ],
      password: ['', ],
      confirmPassword: ['', ],
    });

  }


  ngOnInit(): void {}

  registerNewUser(){

    this.isSubmitted = true;

    if (this.signInForm.valid){
      const userValue = this.signInForm.value;
      this.userService.newUser(userValue).subscribe((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        }
      );
    }

    // const userValue:IUserRegister = {
    //   name: this.signInForm.get('name')?.value,
    //   lastName: this.signInForm.get('lastName')?.value,
    //   telephone: this.signInForm.get('telephone')?.value,
    //   email: this.signInForm.get('email')?.value,
    //   password: this.signInForm.get('password')?.value,
    // }

    // console.log(userValue);

    // this.subscription
    //   this.userService.newUser(userValue).subscribe((response) => {
    //     console.log(response);
    //     this.toastrService.success('Puede Iniciar Sesion', 'Usuario Creado');
    //     this.router.navigate(['/login']);
    //   }, (error) => {
    //     console.log(error);
    //     this.signInForm.reset();
    //   });

  }

  get formControls() {
    return this.signInForm.controls;
  }

  isValidField(field:string): boolean{
    this.getErrorMessage(field);
    return (
      (this.signInForm.get(field)!.touched ||
      this.signInForm.get(field)!.dirty) &&
      !this.signInForm.get(field)!.valid
    );
  }

  // getErrorMessage(field:string): void{
  //   const {errors} = <FormGroup>this.signInForm.get(field);

  //   if (errors) {
  //     // const minlength = this.signInForm.get(field)!.errors?.['minlength'].requiredLength;
  //     const minlength = errors?.['minlength']?.requiredLength;

  //     // Se crea un nuevo tipo parecido a un objeto, donde las claves y los valores son de tipo string
  //     // Esto le permite a TypeScript saber que cuando se intenta acceder a las propiedades del objeto
  //     // usando una variable tipo string es algo valido y que va a funcionar.
  //     // De esta forma podemos usar una variable de tipo string como indice para acceder a las
  //     // propiedades del objeto sin que tire error.
  //     const messages: Record<string, string> = {
  //       required: 'Este campo no puede estar vacio',
  //       pattern: 'El Email no es valido',
  //       minlength: `Este campo no puede tener menos de ${minlength} caracteres`,
  //     };

  //     const errorKey = Object.keys(errors).find(Boolean);

  //     // Verificamos si errorKey está definido y si existe en messages, si está definido entonces
  //     // se asigna el mensaje a errorMessage, si no se le asigna null.
  //     if (errorKey && errorKey in messages) {
  //       this.errorMessage = messages[errorKey];
  //     } else {
  //       this.errorMessage = null;
  //     }
  //   }

  // }

  getErrorMessage(field:string): string{

    let errorMessage!: string;

    if (this.signInForm.get(field)!.errors?.['required']){
      errorMessage = 'Debes ingresar un valor';
    }else if(this.signInForm.get(field)!.hasError('pattern')){
      if(field == 'email'){
        errorMessage = 'El Email no es valido';
      }else{
        errorMessage = 'La contraseña no es valida';
      }

    }else if(this.signInForm.get(field)?.hasError('minlength')){
      const minLength = this.signInForm.get(field)!.errors?.['minlength'].requiredLength;
      errorMessage = `Este campo no puede tener menos de ${minLength} caracteres`;
    }

    return errorMessage;
  }



}
