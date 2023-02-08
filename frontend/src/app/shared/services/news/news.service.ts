import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { NEWS_BY_ID_URL, NEWS_DELETE_URL, NEWS_EDIT_URL, NEWS_NEW_URL, NEWS_URL } from '../../constants/urls';
import { News } from '../../models/news/news';


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  // TRAE TODOS LOS TOURS
  getAllNews():Observable<News[]>{
    return this.http.get<News[]>(NEWS_URL).pipe(catchError(this.handlerUserError));
  }

  // TRAE UN TOUR POR ID
  getNewsById(id:number): Observable<News>{
    return this.http.get<News>(`${NEWS_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UN TOUR
  newNews(tourValue:News): Observable<News | any>{
    return this.http.post(NEWS_NEW_URL, tourValue, {responseType: 'text'} ).pipe(catchError(this.handlerUserError));
  }

  // EDITA UN TOUR
  updateNews(tourId:number, tourValue:News): Observable<any>{
    return this.http.patch<News>(`${NEWS_EDIT_URL}/${tourId}`, tourValue).pipe(catchError(this.handlerUserError));
  }

  //ELIMINA UN TOUR
  deleteNews(tourId:number): Observable<{}>{
    return this.http.delete<News>(`${NEWS_DELETE_URL}/${tourId}`).pipe(catchError(this.handlerUserError));
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
