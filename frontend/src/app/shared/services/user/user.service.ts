import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

import { USER_URL, USER_BY_ID_URL } from '../../constants/urls';
import { IUserRegister } from '../../interfaces/iUserRegister';
import { UserLogin } from '../../interfaces/iuserlogin';



const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // private userToken = new BehaviorSubject<string>(null);

  constructor(
    private http:HttpClient,
    private router:Router,
    private toastrService:ToastrService) {

  }

  getAllUsers():Observable<UserLogin[]>{
    return this.http.get<UserLogin[]>(USER_URL).pipe(catchError(this.handlerUserError));
  }

  getUserById(userId: number):Observable<UserLogin>{
    return this.http.get<UserLogin>(`${USER_BY_ID_URL}/${userId}`).pipe(catchError(this.handlerUserError));
  }

  // CREAR USUARIO

  newUser(user:IUserRegister): Observable<IUserRegister>{
    return this.http.post<IUserRegister>(USER_URL, user).pipe(catchError(this.handlerUserError));
  }

  updateUser(userId:number, user:UserLogin):Observable<UserLogin>{
    return this.http.patch<UserLogin>(`${USER_BY_ID_URL}/${userId}`, user).pipe(catchError(this.handlerUserError));
  }

  deleteUser(userId:number):Observable<{}>{
    return this.http.delete<UserLogin>(`${USER_BY_ID_URL}/${userId}`).pipe(catchError(this.handlerUserError));
  }

  handlerUserError(error:any):Observable<never>{
    let errorMessage = 'Error mamita';
    if(error){
      errorMessage =`Error ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

  }

}
