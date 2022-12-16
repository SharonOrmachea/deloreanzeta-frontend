import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.sass']
})
export class FormResetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hide = true;
  hide2 = true;

  continueToCode(){
    this.router.navigate(['recover/password'])
  }

}
