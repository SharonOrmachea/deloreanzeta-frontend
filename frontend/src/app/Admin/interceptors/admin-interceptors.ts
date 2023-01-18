import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()

export class AdminInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>{

    if(req.url.includes('admin')){
      const authToken = 'xxxxxx';
      const authReq = req.clone({
        setHeaders: {
          auth: authToken,
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}