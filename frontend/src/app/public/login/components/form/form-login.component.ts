
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, Validator } from '@angular/forms';
import { Login } from '../../../../shared/models/sign-in/sign-in';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],

})

export class FormLoginComponent implements OnInit {


login = FormGroup;

constructor() {}

 Login = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email ,Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
    password: new FormControl ('' , [Validators.required , Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*') ,
    Validators.minLength(8)] )
  });





 Onsubmit(){

 }

  ngOnInit(): void {
  }

  hide = true;



}

