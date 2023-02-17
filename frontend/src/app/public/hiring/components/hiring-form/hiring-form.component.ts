import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { HiringService } from 'src/app/shared/services/hiring/hiring.service';
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
    private toastrService:ToastrService,
    private validatorService:ValidationsService,
    private hiringService:HiringService
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

  ngOnInit(): void {}

  sendHiring(){
    if (this.hiringForm.valid){
      const hiringFormValue = this.hiringForm.value;
      this.hiringService.sendHiring(hiringFormValue).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('Verifique su casilla de correo electronico para más informacion acerca de los tiempos de espera de respuesta', 'Formulario enviado');
        this.hiringForm.reset();
      }, (error) => {
        this.toastrService.error('No se pudo enviar su solicitud, hubo un error en el servidor, intentelo de nuevo más tarde', 'Error');
        console.log(error);
      })
    }

  }

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
