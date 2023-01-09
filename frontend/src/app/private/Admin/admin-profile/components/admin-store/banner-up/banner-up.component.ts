import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-up',
  templateUrl: './banner-up.component.html',
  styleUrls: ['./banner-up.component.sass']
})
export class BannerUpComponent implements OnInit {

  public archivos:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  captureFile(event:any):any {
    const archivoSubido = event.target.files[0];
    this.archivos.push(archivoSubido);
  }

}
