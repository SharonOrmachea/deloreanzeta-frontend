import { Injectable } from '@angular/core';
import { sample_products } from '../../../../data';
import { Product } from '../../models/store/products/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getAll():Product[]{
    return sample_products;
  }
}
