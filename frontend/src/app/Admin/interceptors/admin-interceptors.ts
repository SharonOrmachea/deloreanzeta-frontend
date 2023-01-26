import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth/auth.service';

@Injectable()

export class AdminInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>{

    // if(req.url.includes('users')){
    //   const userValue = this.authService.userValue;
    //   const authReq = req.clone({
    //     setHeaders: {
    //       auth: userValue.token,
    //     }
    //   });
    //   return next.handle(authReq);
    // }
    return next.handle(req);
  }
}
