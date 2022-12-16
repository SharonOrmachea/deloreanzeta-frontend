import { Injectable } from '@angular/core';

import { sample_products, sample_productTags } from '../../../../../data';

import { Product } from 'src/app/shared/models/store/products/product';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getAllProducts():Product[]{
    return sample_products;
  }

  getProductById(productId:string){
    return this.getAllProducts().find(product => product.id == productId) ?? new Product();
  }

  getAllProductCategories():ProductCategories[]{
    return sample_productTags;
  }

  getProductsByCategories(tag:string):Product[]{
    return tag === "All"?
    this.getAllProducts():
    this.getAllProducts().filter(product => product.category?.includes(tag));
  }

}
