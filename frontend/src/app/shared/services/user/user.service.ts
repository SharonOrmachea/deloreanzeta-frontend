import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


import { USER_LOGIN_URL, USER_REGISTER_URL } from '../../constants/urls';

import { IUserRegister } from '../../interfaces/iUserRegister';
import { UserLogin, UserResponse } from '../../interfaces/iUserLogin';

const helper = new JwtHelperService();

// const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  // private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());

  // public userObservable:Observable<User>

  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.checkToken();
    // this.userObservable = this.userSubject.asObservable();
  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData:UserLogin): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(USER_LOGIN_URL, authData).pipe(
      map( (res:UserResponse) => {
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
  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);

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
    }
    window.alert(errorMessage);
    return throwError( () => new Error(errorMessage));
  }

  // login(userLogin:UserLogin):Observable<User>{
  //   return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
  //     tap({
  //       next: (user) => {
  //         this.setUserToLocalStorage(user);
  //         this.userSubject.next(user);
  //         this.toastrService.success(
  //         `Welcome to Foodmine ${user.name}!`,
  //         'Login Successful'
  //         )
  //       },
  //       error: (errorResponse) => {
  //         this.toastrService.error(errorResponse.error, 'Login Failed');
  //       }
  //     })
  //   );
  // }

  // register(userRegister:IUserRegister): Observable<User>{
  //   return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
  //     tap({
  //       next: (user) => {
  //         this.setUserToLocalStorage(user);
  //         this.userSubject.next(user);
  //         this.toastrService.success(
  //         `Welcome to Delorean Zeta Site ${user.name}`,
  //         'Register Successful'
  //         )
  //       },
  //       error: (errorResponse) => {
  //         this.toastrService.error(errorResponse.error,
  //           'Register Failed')
  //       }
  //     })
  //   )
  // }

  // logout(){
  //   this.userSubject.next(new User());
  //   localStorage.removeItem(USER_KEY);
  //   window.location.reload();
  // }

  // private setUserToLocalStorage(user:User) {
  //   localStorage.setItem(USER_KEY, JSON.stringify(user));
  // }

  // private getUserFromLocalStorage():User{
  //   const userJson = localStorage.getItem(USER_KEY);
  //   if(userJson) return JSON.parse(userJson) as User;
  //   return new User();
  // }
}
