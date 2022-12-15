import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-identify',
  templateUrl: './form-identify.component.html',
  styleUrls: ['./form-identify.component.sass']
})
export class FormIdentifyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueToCode(){
    this.router.navigate(['login/code'])
  }

}
