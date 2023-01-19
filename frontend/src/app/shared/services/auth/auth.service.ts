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

  private userToken = new BehaviorSubject<string>('hola');

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

  get isAdmin$(): Observable<Role> {
    return this.role.asObservable();
  }

  get userTokenValue(): string{
    return this.userToken.getValue();
  }

  login(authData:UserLogin): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(USER_LOGIN_URL, authData).pipe(
      map((user:UserResponse) => {
        this.toastrService.success('Bienvenido a Delorean Zeta Usuario Promedio', 'Login Exitoso');
        console.log('Res->', user);
        this.saveToken(user.token);
        this.loggedIn.next(true);
        this.role.next(user.role);
        this.userToken.next(user.token);
        return user;
      }),
      catchError( (error) => this.handlerError(error) )
    );

  }

  logout(): void{
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.role.next(null);
    this.router.navigate(['/login']);
  }

  private checkToken():void{
    const user = JSON.parse(localStorage.getItem('user')) || null;

    if (user){
      const isExpired = helper.isTokenExpired(user.token);

      if (isExpired){
        this.logout();
      } else {
        this.loggedIn.next(true);
      }
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
