import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],

})

export class FormLoginComponent implements OnInit {

  hide = true;

  login:FormGroup

  constructor() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'),
      Validators.minLength(8)])
    });
  }



  Onsubmit() { }


  ngOnInit(): void { }

}

