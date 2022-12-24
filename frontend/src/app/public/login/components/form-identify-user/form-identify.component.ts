import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-identify',
  templateUrl: './form-identify.component.html',
  styleUrls: ['./form-identify.component.sass']
})
export class FormIdentifyComponent implements OnInit {
 Identify = FormGroup;

  identify = new FormGroup ({
    email: new FormControl ('', [Validators.required, Validators.email ,Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')])
})

  constructor(private router: Router) {


}

  ngOnInit(): void {
  }

  continueToCode(){
    this.router.navigate(['login/code'])
  }

}
