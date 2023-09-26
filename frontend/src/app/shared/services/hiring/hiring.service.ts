import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SEND_HIRING_URL } from '../../routes/routes';
import { Hiring } from '../../models/hiring/hiring';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  constructor(
    private http: HttpClient,
  ) { }

  sendHiring(hiringFormValue: Hiring): Observable<Hiring | void> {
    return this.http.post<Hiring>(SEND_HIRING_URL, hiringFormValue).pipe(catchError(this.handlerUserError));
  }

  handlerUserError(error: any): Observable<never> {
    let errorMessage = 'Error';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    return throwError(() => (errorMessage));

  }
}
