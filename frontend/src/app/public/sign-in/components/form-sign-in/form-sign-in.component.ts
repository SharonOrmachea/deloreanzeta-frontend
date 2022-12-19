import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Register } from '../../../../shared/models/sign-up/sign-up';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.sass']
})
export class FormSignInComponent implements OnInit {

Register: FormGroup;

  constructor(public fb: FormBuilder) {
    this.Register= this.fb.group(
      {
        name: new FormControl ('',[Validators.required , Validators.minLength(4)]),
        lastame:new FormControl ('',[Validators.required , Validators.minLength(4)]),
        telephone:new FormControl ('',[Validators.required , Validators.pattern('0-9')]),
        email:new FormControl ('',[Validators.required , Validators.email]),
        password:new FormControl ('',[Validators.required , Validators.minLength(6)]),
        repeatPassword:new FormControl ('',[Validators.required , Validators.minLength(6)]),
      }
    )
    console.log (this.Register)
 }


  ngOnInit(): void {
  }

  hide = true;
  hide2 = true;
Submit(){

}
}
