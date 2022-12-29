import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],

})

export class FormLoginComponent implements OnInit {

  hide = true;

  loginForm!:FormGroup;
  isSubmitted = false;

  constructor(private formBuilder:FormBuilder) {
    // this.login = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
    //   password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'),
    //   Validators.minLength(8)])
    // });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [ '', [Validators.required, Validators.email] ],
      password:[ '', Validators.required ]
    })
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    alert(`
      email: ${this.fc['email'].value},
      password: ${this.fc['password'].value}
    `)
   }




}

