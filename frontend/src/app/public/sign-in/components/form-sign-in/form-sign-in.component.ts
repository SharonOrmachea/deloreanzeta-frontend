import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../shared/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.sass']
})

export class FormSignInComponent implements OnInit {


  hide = true;
  hide2 = true;

  signInForm!:FormGroup;
  isSubmitted = false;

  returnUrl = '';

  // register = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('a-z')]),
  //   lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('a-z')]),
  //   telephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('0-9')]),
  //   email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
  //   password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'),
  //   Validators.minLength(8)]),
  //   repeatpassword: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'),
  //   Validators.minLength(8)]),

  // });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required,  Validators.minLength(3), Validators.pattern('a-z')]],
      lastName: ['', [Validators.required,  Validators.minLength(3), Validators.pattern('a-z')]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('0-9')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*')]]
    },{
      validators: PasswordsMatchValidator('password', 'repeatPassword')
    })
   }


  Submit() { }

}
function PasswordsMatchValidator(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

