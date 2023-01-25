import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { UserService } from '../../../../shared/services/user/user.service';

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

  errorMessage!: string | null;

  actionToDo = Action.NEW;

  isSubmitted = false;

  returnUrl = '';

  constructor( private formBuilder: FormBuilder, private userService: UserService ) {

    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required,  Validators.minLength(3), Validators.pattern('a-zA-Z')]],
      lastName: ['', [Validators.required,  Validators.minLength(3), Validators.pattern('a-zA-Z')]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('0-9')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]],
      termsAndConditions: [false, Validators.requiredTrue]
    });

  }

  ngOnInit(): void {}

  registerNewUser(){
    const signInFormValue = this.signInForm.value;

    if(this.actionToDo === Action.NEW){
      this.userService.newUser(signInFormValue).subscribe( res => {
        console.log('New', res);
      })
    }

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
  //     // const minlength = errors?.['minlength'].requiredLength;

  //     // Se crea un nuevo tipo parecido a un objeto, donde las claves y los valores son de tipo string
  //     // Esto le permite a TypeScript saber que cuando se intenta acceder a las propiedades del objeto
  //     // usando una variable tipo string es algo valido y que va a funcionar.
  //     // De esta forma podemos usar una variable de tipo string como indice para acceder a las
  //     // propiedades del objeto sin que tire error.
  //     const messages: Record<string, string> = {
  //       required: 'Este campo no puede estar vacio',
  //       pattern: 'El Email no es valido',
  //       // minlength: `Este campo no puede tener menos de ${minlength} caracteres`,
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
    let message = '';

    if (this.signInForm.get(field)!.errors?.['required']){
      message = 'Debes ingresar un valor';
    }else if(this.signInForm.get(field)!.hasError('pattern')){
      if(field == 'email'){
        message = 'El Email no es valido';
      }else{
        message = 'La contraseña no es valida';
      }

    }else if(this.signInForm.get(field)?.hasError('minlength')){
      const minLength = this.signInForm.get(field)!.errors?.['minlength'].requiredLength;
      message = `Este campo no puede tener menos de ${minLength} caracteres`;
    }

    return message;
  }


}
