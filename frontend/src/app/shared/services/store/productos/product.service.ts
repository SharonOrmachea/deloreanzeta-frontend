import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';

import { PRODUCT_URL, PRODUCT_BY_ID_URL } from '../../../routes/routes';

import { Product } from 'src/app/shared/models/store/products/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private refresh$ = new Subject<void>();

  constructor(private http:HttpClient) { }

  get refreshProduct$(){
    return this.refresh$;
  }

  // METODOS PARA PRODUCTOS

  // Traer todos los productos
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(PRODUCT_URL).pipe(catchError(this.handlerUserError));;
  }

  // Traer los productos por ID
  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(`${PRODUCT_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
  }

  // Traer productos por categoria
  getProductsByCategories(tag:string):Observable<Product[]>{
    return tag === "All"?
    this.getAllProducts():
    this.http.get<Product[]>(PRODUCT_BY_ID_URL + tag);
  }

  // Agrega un producto
  newProduct(product:Product): Observable<Product | any>{
    return this.http.post(PRODUCT_URL, product, {responseType: 'text'} ).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  // Edita un producto
  updateProduct(id:number, product:Product): Observable<any>{
    return this.http.patch<Product>(`${PRODUCT_BY_ID_URL}/${id}`, product).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  // Elimina un producto
  deleteProduct(id:number): Observable<{}>{
    return this.http.delete<Product>(`${PRODUCT_BY_ID_URL}/${id}`).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  handlerUserError(error: any): Observable<never> {
    let errorMessage = 'Error';
    if (error) {
      errorMessage = `Error ${error.message}`;
      //console.log(errorMessage)
    }
    return throwError(() => (errorMessage));

  }


}
