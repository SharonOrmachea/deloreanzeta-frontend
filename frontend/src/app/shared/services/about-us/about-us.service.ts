import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { ABOUT_US_ID_URL, ABOUT_US_URL } from '../../routes/routes';
import { Members } from '../../models/about-us/about-us';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refreshAboutUs$(){
    return this.refresh$;
  }

  // TRAE TODOS LOS INTEGRANTES
  getAllMembers():Observable<Members[]>{
    return this.http.get<Members[]>(ABOUT_US_URL).pipe(catchError(this.handlerUserError));
  }

  // TRAE UN INTEGRANTE POR ID
  getMemberById(id:number): Observable<Members>{
    return this.http.get<Members>(`${ABOUT_US_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UN INTEGRANTE
  newMember(memberValue:Members): Observable<Members | any>{
    return this.http.post(ABOUT_US_URL, memberValue, {responseType: 'text'} ).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  // EDITA UN INTEGRANTE
  updateMember(id:number, memberValue:Members): Observable<any>{
    return this.http.patch<Members>(`${ABOUT_US_ID_URL}/${id}`, memberValue).pipe(tap(() => {
      this.refresh$.next();
    }),catchError(this.handlerUserError));
  }

  //ELIMINA UN INTEGRANTE
  deleteMember(id:number): Observable<{}>{
    return this.http.delete<Members>(`${ABOUT_US_ID_URL}/${id}`).pipe(tap(() => {
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
