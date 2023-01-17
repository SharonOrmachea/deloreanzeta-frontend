import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

import { USER_LOGIN_URL } from '../../constants/urls';
import { Role, UserLogin, UserResponse } from '../../interfaces/iuserlogin';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  private role = new BehaviorSubject<Role>(null);

  constructor(
    private http:HttpClient,
    private router:Router,
    private toastrService:ToastrService
  ) {
    this.checkToken();
  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData:UserLogin): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(USER_LOGIN_URL, authData).pipe(
      map((res:UserResponse) => {
        this.toastrService.success('Bienvenido a Delorean Zeta Usuario Promedio', 'Login Exitoso');
        console.log('Res->', res);
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError( (error) => this.handlerError(error) )
    );

  }

  logout(): void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.role.next(null)
    this.router.navigate(['/login']);
  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired->', isExpired);

    if (isExpired){
      this.logout();
    } else {
      this.loggedIn.next(true);
    }
  }

  private saveToken(token:string):void{
    localStorage.setItem('token', token);
  }

  private handlerError(error:any): Observable<never>{
    let errorMessage = 'An error ocurred retrienving data';
    if(error){
      errorMessage= `Error: code ${error.message}`
      this.toastrService.error('Email y/o contraseña invalido', 'Login Failed');
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
