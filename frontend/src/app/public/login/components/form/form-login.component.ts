import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],

})

export class FormLoginComponent implements OnInit, OnDestroy {

  hide = true;

  loginForm: FormGroup;

  private subscription: Subscription = new Subscription();

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogin(){
    const formValue = this.loginForm.value;
    this.subscription.add(
      this.authService.login(formValue).subscribe( res => {
        if(res){
          this.router.navigate(['/home'])
        }
      })
    );
  }

  getErrorMessage(field:string): string{
    let message = '';

    if (this.loginForm.get(field)!.errors?.['required']){
      message = 'Debes ingresar un valor';
    }else if(this.loginForm.get(field)!.hasError('pattern')){
      if(field == 'email'){
        message = 'El Email no es valido';
      }else{
        message = 'La contraseña no es valida';
      }

    }else if(this.loginForm.get(field)?.hasError('minlength')){
      const minLength = this.loginForm.get(field)!.errors?.['minlength'].requiredLength;
      message = `Este campo no puede tener menos de ${minLength} caracteres`;
    }

    return message;
  }

  isValidField(field:string): boolean{
    return (
      (this.loginForm.get(field)!.touched ||
      this.loginForm.get(field)!.dirty) &&
      !this.loginForm.get(field)!.valid
    );
  }

}

