import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Sources } from 'src/app/shared/models/gallery/gallery';
import { GalleryService } from 'src/app/shared/services/gallery/gallery.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-list-gallery',
  templateUrl: './list-gallery.component.html',
  styleUrls: ['./list-gallery.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ListGalleryComponent implements OnInit {

  sources!:Sources[];

  selectedImageUrl!: string;

  // selectedImage!: Sources;


  constructor( private _servicio:GalleryService, private modalService: NgbModal ) {
    this.sources = this._servicio.getAll();
  }

  open(content: TemplateRef<any>, imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.modalService.open(content, { centered: true, backdrop: 'static' });
  }

  // open(content: TemplateRef<any>, image: Sources) {
  //   this.selectedImage = image;
  //   this.modalService.open(content, { centered: true, backdrop: 'static' });
  // }
  
  openTwo(content: TemplateRef<any>) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
