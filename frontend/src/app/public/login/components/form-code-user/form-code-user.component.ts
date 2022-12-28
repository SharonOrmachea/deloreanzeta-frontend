import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-code-user',
  templateUrl: './form-code-user.component.html',
  styleUrls: ['./form-code-user.component.sass']
})
export class FormCodeUserComponent implements OnInit {

 


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueToResetPass(){
    this.router.navigate(['recover/password'])
  }

}
