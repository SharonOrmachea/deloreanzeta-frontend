import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.sass']
})
export class FormResetComponent implements OnInit {
reset = FormGroup

Reset = new FormGroup({
  password: new FormControl ('' , [Validators.required , Validators.pattern('^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$') ,
  Validators.minLength(8)]),
  repeatpassword: new FormControl ( '' , [Validators.required , Validators.pattern('^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$') ,
  Validators.minLength(8)]),
})
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hide = true;
  hide2 = true;
submit(){}

  continueToCode(){
    this.router.navigate(['recover/password'])
  }

}
