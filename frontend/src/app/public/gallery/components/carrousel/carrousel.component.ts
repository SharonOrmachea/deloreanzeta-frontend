import { Component, OnInit } from '@angular/core';
import { Sources } from 'src/app/shared/models/gallery/gallery';
import { GalleryService } from 'src/app/shared/services/gallery/gallery.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.sass']
})
export class CarrouselComponent implements OnInit {

  sources!:Sources[];

  constructor( private _servicio:GalleryService ) {

    this.sources = this._servicio.getAll();
    
  }

  ngOnInit(): void {
  }

  closeModal() {
    this._servicio.$modal.emit(false)
  }

}
