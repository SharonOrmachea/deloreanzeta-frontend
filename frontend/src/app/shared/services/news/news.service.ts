import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { NEWS_BY_ID_URL, NEWS_URL } from '../../routes/routes';
import { News } from '../../models/news/news';


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refreshNews$(){
    return this.refresh$;
  }

  // TRAE TODAS LAS NOTICIAS
  getAllNews():Observable<News[]>{
    return this.http.get<News[]>(NEWS_URL).pipe(catchError(this.handlerUserError));
  }

  // TRAE UNA NOTICIA POR ID
  getNewsById(id:number): Observable<News>{
    return this.http.get<News>(`${NEWS_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UNA NOTICIA
  newNews(newsValue:News, headers:HttpHeaders): Observable<News | any>{
    return this.http.post(NEWS_URL, newsValue, {responseType: 'text' , headers} ).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  // EDITA UNA NOTICIA
  updateNews(id:number, newsValue:News, headers:HttpHeaders): Observable<any>{
    return this.http.patch<News>(`${NEWS_BY_ID_URL}/${id}`, newsValue, { headers }).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  //ELIMINA UNA NOTICIA
  deleteNews(id:number, headers:HttpHeaders): Observable<{}>{
    return this.http.delete<News>(`${NEWS_BY_ID_URL}/${id}`, { headers }).pipe(tap(() => {
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
