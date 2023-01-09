import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.sass']
})
export class AdminProfileComponent implements OnInit {

  @Input()
  color: ThemePalette

  constructor() { }

  ngOnInit(): void {
  }

}
