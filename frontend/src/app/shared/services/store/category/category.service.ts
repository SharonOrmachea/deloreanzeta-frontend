import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { CATEGORIES_URL, CATEGORY_BY_ID_URL } from 'src/app/shared/routes/routes';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refreshCategories$(){
    return this.refresh$;
  }

  // METODOS PARA CATEGORIAS

  // Traer todas las categorias de los productos
  getAllProductCategories(): Observable<ProductCategories[]> {
    return this.http.get<ProductCategories[]>(CATEGORIES_URL).pipe(catchError(this.handlerUserError));
  }

  // Agrega una categoria
  newCategory(category:ProductCategories): Observable<ProductCategories | any>{
    return this.http.post(CATEGORIES_URL, category, {responseType: 'text'} ).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  // Edita una categoria
  updateCategory(id:number, category:ProductCategories): Observable<any>{
    return this.http.patch<ProductCategories>(`${CATEGORY_BY_ID_URL}/${id}`, category).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  // Elimina una categoria
  deleteCategory(id:number): Observable<{}>{
    return this.http.delete<ProductCategories>(`${CATEGORY_BY_ID_URL}/${id}`).pipe(tap(() => {
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
