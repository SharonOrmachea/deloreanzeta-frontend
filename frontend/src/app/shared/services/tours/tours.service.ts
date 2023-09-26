import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';

import { Tours } from '../../models/tours/tours';
import { TOURS_URL, TOUR_BY_ID_URL } from '../../routes/routes';


@Injectable({
  providedIn: 'root'
})

export class ToursService {

  private refresh$ = new Subject<void>();

  constructor( private http: HttpClient ) {}

  get refreshTour$(){
    return this.refresh$;
  }

  // TRAE TODOS LOS TOURS
  getAllTours():Observable<Tours[]>{
    return this.http.get<Tours[]>(TOURS_URL).pipe(catchError(this.handlerUserError));
  }

  // TRAE UN TOUR POR ID
  getToursById(id:number): Observable<Tours>{
    return this.http.get<Tours>(`${TOUR_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UN TOUR
  newTour(tourValue:Tours): Observable<Tours | any>{
    return this.http.post(TOURS_URL, tourValue, {responseType: 'text'} ).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  // EDITA UN TOUR
  updateTour(id:number, tourValue:Tours): Observable<any>{
    return this.http.patch<Tours>(`${TOUR_BY_ID_URL}/${id}`, tourValue).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  //ELIMINA UN TOUR
  deleteTour(id:number): Observable<{}>{
    return this.http.delete<Tours>(`${TOUR_BY_ID_URL}/${id}`).pipe(tap(() => {
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
