import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/models/store/products/product';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { PRODUCT_URL, PRODUCT_CATEGORIES_URL, PRODUCT_BY_CATEGORIES_URL, PRODUCT_BY_ID_URL } from '../../../constants/urls';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) { }

  // Traer todos los productos del back-end
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(PRODUCT_URL);
  }

  // Traer los productos por categoria del back-end
  getProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(PRODUCT_BY_ID_URL + productId);
  }

  deleteProduct(id:string):Observable<any>{
    return this.http.delete(PRODUCT_BY_ID_URL + id);
  }

  setProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(PRODUCT_URL, product);
  }

  // Traer todas las categorias de los productos del back-end
  getAllProductCategories():Observable<ProductCategories[]>{
    return this.http.get<ProductCategories[]>(PRODUCT_CATEGORIES_URL);
  }

  // Traer productos por categoria del back-end
  getProductsByCategories(tag:string):Observable<Product[]>{
    return tag === "All"?
    this.getAllProducts():
    this.http.get<Product[]>(PRODUCT_BY_CATEGORIES_URL + tag);
  }

}
