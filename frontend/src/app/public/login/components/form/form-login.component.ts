import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../shared/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],

})

export class FormLoginComponent implements OnInit {

  hide = true;

  loginForm!:FormGroup;
  // isSubmitted = false;
  // returnUrl = '';

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {
    // this.login = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
    //   password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*'),
    //   Validators.minLength(8)])
    // });
  }

  ngOnInit(): void {
    const userData = {
      email: 'probando@gmail.com',
      password: 'Hola1234'
    }

    this.userService.login(userData).subscribe( res => console.log('Inicio de Sesion'));

    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    });

    // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  onLogin():void{
    const formValue = this.loginForm.value;
    this.userService.login(formValue).subscribe( res => {
      if (res){
        this.router.navigate(['/home'])
      }
    })
  }

  // get fc(){
  //   return this.loginForm.controls;
  // }

  // submit() {
  //   this.isSubmitted = true;

  //   if(this.loginForm.invalid) return;

  //   this.userService.login({
  //     email: this.fc['email'].value,
  //     password: this.fc['password'].value
  //   }).subscribe(() => {
  //     this.router.navigateByUrl(this.returnUrl);
  //   });
  // }



}

