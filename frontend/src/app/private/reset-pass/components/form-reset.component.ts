import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';
import { UserService } from '../../../shared/services/user/user.service';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CookieStorage } from 'cookie-storage';

@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.sass']
})
export class FormResetComponent implements OnInit {

  hide = true;
  hide2 = true;

  resetForm!: FormGroup;

  cookieStorage = new CookieStorage();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validatorService:ValidationsService,
    private userService:UserService,
    private toastrService:ToastrService,
    ) {

    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'), this.validatorService.checkPasswords('password')]],
    },
    );


  }

  ngOnInit(): void {

    const url = window.location.href;
    const cookieUrl = url.split('/').pop();

    const headers = new HttpHeaders({
      'Authorization': `${cookieUrl}`
    });

    this.userService.authorizeHeaders(headers).subscribe( res => {
      console.log(res);
    }, (error) =>{
      console.log(error);
      this.toastrService.error('Vuelva a enviar el mail de recuperacion de contraseña', 'Token Expirado');
      this.router.navigate(['/login/identify']);
    });
  }

  continueToCode(){
    const tokenCookie = this.cookieStorage.getItem('token');
    const userPasswords = this.resetForm.value;
    const headers = new HttpHeaders({
      'Authorization': `${tokenCookie}`
    })
    this.userService.resetPass(userPasswords, headers).subscribe( (res) => {
      console.log(res);
      this.toastrService.success('Inicie Sesion con su cuenta', 'Restablecimiento Exitoso');
      this.router.navigate(['/login']);
    }, (error) => {
      console.log(error);
      this.toastrService.error('No se pudo restablecer la contraseña, vuelva a intentarlo', 'Restore Failed');
    })

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
