import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

import { USER_URL, USER_BY_EMAIL_URL, USER_IDENTIFY_EMAIL_URL } from '../../constants/urls';
import { IUserRegister } from '../../interfaces/iUserRegister';
import { UserLogin, UserSendEmail } from '../../interfaces/iuserlogin';

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

  // TRAE TODOS LOS USUARIOS
  getAllUsers():Observable<UserLogin[]>{
    return this.http.get<UserLogin[]>(USER_URL).pipe(catchError(this.handlerUserError));
  }

  // ENVIA EMAIL DE RESET PASS AL MAIL
  sendEmail(userEmail: string):Observable<UserSendEmail>{
    return this.http.post<UserSendEmail>(USER_IDENTIFY_EMAIL_URL,userEmail).pipe(catchError(this.handlerUserError));
  }

  // TRAE UN USUARIO POR EMAIL
  getUserByEmail(userEmail: string):Observable<UserLogin>{
    return this.http.get<UserLogin>(`${USER_BY_EMAIL_URL}/${userEmail}`).pipe(catchError(this.handlerUserError));
  }

  // CREAR USUARIO
  newUser(user:IUserRegister): Observable<IUserRegister | void>{
    return this.http.post<IUserRegister>(USER_URL, user).pipe(catchError(this.handlerUserError));
  }

  // EDITA UN USUARIO
  updateUser(userId:number, user:UserLogin):Observable<UserLogin>{
    return this.http.patch<UserLogin>(`${USER_BY_EMAIL_URL}/${userId}`, user).pipe(catchError(this.handlerUserError));
  }

  // ELIMINA UN USUARIO
  // deleteUser(userId:number):Observable<{}>{
  //   return this.http.delete<UserLogin>(`${USER_BY_ID_URL}/${userId}`).pipe(catchError(this.handlerUserError));
  // }

  handlerUserError(error:any):Observable<never>{
    let errorMessage = 'Error mamita';
    if(error){
      errorMessage =`Error ${error.message}`;
    }
    return throwError(() =>(errorMessage));

  }

}
