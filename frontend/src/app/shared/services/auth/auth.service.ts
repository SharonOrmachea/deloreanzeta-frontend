import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

import { USER_LOGIN_URL } from '../../constants/urls';
import { UserLogin, UserResponse } from '../../interfaces/iuserlogin';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user = new BehaviorSubject<UserResponse>(null!);

  isLogged:boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router,
    private toastrService:ToastrService
  ) {
    this.checkToken();
    console.log(this.isLogged);
  }

  get user$():Observable<UserResponse> {
    return this.user.asObservable();
  }

  get userValue():UserResponse {
    return this.user.getValue();
  }

  login(authData:UserLogin): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(USER_LOGIN_URL, authData).pipe(
      map((user:UserResponse) => {
        this.toastrService.success(`Bienvenido/a a Delorean Zeta ${user.name} ${user.lastname}`, 'Login Exitoso');
        console.log('user: ', user);
        this.saveLocalStorage(user);
        this.user.next(user);
        return user;
      }),
      catchError( (error) => this.handlerError(error) )
    );
  }

  logout(): void{
    localStorage.removeItem('user');
    this.user.next(null!);
    this.router.navigate(['/login']);
  }

  private checkToken():void{
    const user = JSON.parse(localStorage.getItem('user')!) || null;

    if (user){
      const isExpired = helper.isTokenExpired(user.token);

      if (isExpired){
        this.logout();
        this.isLogged = false;
      } else {
        this.user.next(user);
        this.isLogged = true;
      }
    }
  }

  private saveLocalStorage(user:UserResponse):void{
    const { id, message, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
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
