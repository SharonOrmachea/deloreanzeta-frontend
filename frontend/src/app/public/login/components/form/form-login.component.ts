import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ValidationsService } from '../../../../shared/services/validations/validations.service';




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
    private router:Router,
    private validatorService:ValidationsService) {

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

  get formControls() {
    return this.loginForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.loginForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.loginForm);
  }

}

