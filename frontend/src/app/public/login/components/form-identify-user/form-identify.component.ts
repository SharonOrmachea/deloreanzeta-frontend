import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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

  identifyForm:FormGroup;

  isValid = false;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private validatorService:ValidationsService,
    private userService: UserService,
    private toastrService:ToastrService,
    ) {

    this.identifyForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
    });

  }

  ngOnInit(): void {
  }

  sendEmail() {

    if (this.identifyForm.valid){
      const userValue = this.identifyForm.value;
      this.userService.sendEmail(userValue).subscribe( response => {
        if(response){
          console.log(response);
          this.toastrService.success('Verifique su casilla de correo electronico', 'Email Enviado');
          this.router.navigate(['/login']);
          this.identifyForm.reset();
        } else{
          console.log(Error);
          this.toastrService.error('Usuario inexistente, compruebe el email ingresado', 'Email Failed');
        }

      })
    }

  }

  get formControls() {
    return this.identifyForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.identifyForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.identifyForm);
  }

}
