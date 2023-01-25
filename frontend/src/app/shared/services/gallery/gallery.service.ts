import { Injectable } from '@angular/core';
import { sample_sources } from 'src/data';
import { Sources } from '../../models/gallery/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

    getAll():Sources[]{
      return sample_sources;
    }
  
    getNewById(elementId:string){
      return this.getAll().find(i => i.id == elementId) ?? new Sources();
    }

}
