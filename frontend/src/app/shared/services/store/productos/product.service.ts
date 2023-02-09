import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { PRODUCT_URL, PRODUCT_CATEGORIES_URL, PRODUCT_BY_CATEGORIES_URL, PRODUCT_BY_ID_URL } from '../../../constants/urls';

import { Product } from 'src/app/shared/models/store/products/product';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) { }

  // METODOS PARA PRODUCTOS

  // Traer todos los productos del back-end
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(PRODUCT_URL).pipe(catchError(this.handlerUserError));;
  }

  // Traer los productos por categoria del back-end
  getProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(PRODUCT_BY_ID_URL + productId);
  }

  // Agrega un producto del back-end
  postProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(PRODUCT_URL, product);
  }

  // Edita un producto del back-end
  setProduct(id: string, product: Product){
    return this.http.put( PRODUCT_BY_ID_URL + id, product);
  }

  // Elimina un producto del back-end
  deleteProduct(id:string):Observable<any>{
    return this.http.delete(PRODUCT_BY_ID_URL + id);
  }

  // METODOS PARA CATEGORIAS

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


  handlerUserError(error: any): Observable<never> {
    let errorMessage = 'Error';
    if (error) {
      errorMessage = `Error ${error.message}`;
      console.log(errorMessage)
    }
    return throwError(() => (errorMessage));

  }

}
