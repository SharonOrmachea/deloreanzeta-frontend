import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-identify',
  templateUrl: './form-identify.component.html',
  styleUrls: ['./form-identify.component.sass']
})
export class FormIdentifyComponent implements OnInit {

  identify:FormGroup;

  constructor(private router: Router) {
    this.identify = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')])
    })

  }

  ngOnInit(): void {
  }

  continueToCode() {
    this.router.navigate(['login/code'])
  }

}
