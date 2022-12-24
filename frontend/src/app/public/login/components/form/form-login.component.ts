
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../../../shared/models/sign-in/sign-in';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent implements OnInit {
 Login: FormGroup;

  constructor( public fb: FormBuilder) {
 this.Login = this.fb.group(
  { email: new FormGroup('',[Validators.required, Validators.email]),
    password: new FormGroup('',[Validators.required, Validators.minLength(8)])

  })
   console.log(this.Login)
  }


 Submit(){

 }

  ngOnInit(): void {
  }

  hide = true;

}
