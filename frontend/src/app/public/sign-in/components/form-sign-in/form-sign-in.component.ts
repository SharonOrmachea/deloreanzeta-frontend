import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.sass']
})

export class FormSignInComponent implements OnInit {


  hide = true;
  hide2 = true;


  register = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('a-z')]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('a-z')]),
    telephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('0-9')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
    password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'),
    Validators.minLength(8)]),
    repeatpassword: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'),
    Validators.minLength(8)]),

  });

  constructor() { }

  ngOnInit(): void { }

 

 

  Submit() { }

}
