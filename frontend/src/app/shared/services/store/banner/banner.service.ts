import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { BANNER_URL } from 'src/app/shared/routes/routes';
import { Carousel } from 'src/app/shared/models/store/carrusel/carousel';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private refresh$ = new Subject<void>();

  constructor( private http: HttpClient ) { }

  get refreshBanner$(){
    return this.refresh$;
  }

  // TRAE LOS BANNERS
  getAllTours():Observable<Carousel[]>{
    return this.http.get<Carousel[]>(BANNER_URL).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UN TOUR
  newBanner(bannerValue:Carousel): Observable<Carousel | any>{
    return this.http.post(BANNER_URL, bannerValue ).pipe(tap(() => {
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
