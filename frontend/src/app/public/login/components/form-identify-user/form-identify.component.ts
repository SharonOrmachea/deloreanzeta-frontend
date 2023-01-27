import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-identify',
  templateUrl: './form-identify.component.html',
  styleUrls: ['./form-identify.component.sass']
})
export class FormIdentifyComponent implements OnInit {

  identifyEmail:FormGroup;

  isValid = false;

  constructor(
    private router: Router,
    private validatorService:ValidationsService,
    private userService: UserService,
    private toastrService:ToastrService,
    ) {

    this.identifyEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')])
    })

    this.isValid = this.identifyEmail.get('email')!.errors?.['required'];

  }

  ngOnInit(): void {
  }

  sendEmail() {

    if (this.identifyEmail.valid){
      const userValue = this.identifyEmail.value;
      this.userService.sendEmail(userValue).subscribe( response => {
        if(response){
          console.log(response);
          this.toastrService.success('Verifique su casilla de correo electronico', 'Email Enviado');
          this.router.navigate(['/login']);
          this.identifyEmail.reset();
        } else{
          console.log(Error);
          this.toastrService.error('Usuario inexistente, compruebe el email ingresado', 'Email Failed');
        }

      })
    }

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
