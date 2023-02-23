import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CATEGORIES_URL, CATEGORY_BY_ID_URL } from 'src/app/shared/constants/urls';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  // METODOS PARA CATEGORIAS

  // Traer todas las categorias de los productos
  getAllProductCategories(): Observable<ProductCategories[]> {
    return this.http.get<ProductCategories[]>(CATEGORIES_URL);
  }

  // Agrega una categoria
  newCategory(category: ProductCategories): Observable<ProductCategories> {
    return this.http.post<ProductCategories>(CATEGORIES_URL, category);
  }

  // Edita una categoria
  updateCategory(id: string, category: ProductCategories) {
    return this.http.put(CATEGORY_BY_ID_URL + id, category);
  }

  // Elimina una categoria
  deleteCategory(id: string): Observable<any> {
    return this.http.delete(CATEGORY_BY_ID_URL + id);
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
