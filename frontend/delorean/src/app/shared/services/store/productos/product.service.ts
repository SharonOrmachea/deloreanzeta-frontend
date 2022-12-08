import { Injectable } from '@angular/core';
import { sample_products } from '../../../../../data';
import { Product } from '../../../models/store/products/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getAll():Product[]{
    return sample_products;
  }

  getProductById(productId:string){
    return this.getAll().find(product => product.id == productId) ?? new Product();
  }
}
