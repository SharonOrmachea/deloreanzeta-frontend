import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, throwError} from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';
import { UserResponse } from '../../interfaces/iuserlogin';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class CheckLoginGuard implements CanActivate {

  constructor(private authService:AuthService, private toastrService:ToastrService){}

  canActivate(): Observable<boolean> {
    //console.log('canActivate')
    return this.authService.user$.pipe( take(1), map(
      (user:UserResponse) => (!user ? true : false)
    ), catchError( (error) => this.handlerError(error)));

  }

  private handlerError(error:any): Observable<never>{
    let errorMessage = 'Un error';
    if(error){
      errorMessage= `Error: code ${error.message}`
      this.toastrService.error('Email y/o contraseña invalido', 'Login Failed');
    }
    return throwError(() => errorMessage);
  }

}
