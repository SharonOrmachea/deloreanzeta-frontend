import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

import { USER_URL, USER_BY_EMAIL_URL, USER_IDENTIFY_EMAIL_URL, RESET_PASS_URL, AUTHORIZE_RESET_PASS_URL } from '../../constants/urls';

import { IUserRegister } from '../../interfaces/iUserRegister';
import { UserLogin, UserResetPass, UserSendEmail } from '../../interfaces/iuserlogin';

import { AuthorizeHeaders } from '../../models/users/authorizeHeaders';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient ) {}

  // CREAR USUARIO
  newUser(user: IUserRegister): Observable<IUserRegister | void> {
    return this.http.post<IUserRegister>(USER_URL, user).pipe(catchError(this.handlerUserError));
  }

  // TRAE TODOS LOS USUARIOS
  getAllUsers(): Observable<UserLogin[]> {
    return this.http.get<UserLogin[]>(USER_URL).pipe(catchError(this.handlerUserError));
  }

  // ENVIA EMAIL DE RESET PASS AL EMAIL
  sendEmail(userEmail: string): Observable<UserSendEmail> {
    return this.http.post<UserSendEmail>(USER_IDENTIFY_EMAIL_URL, userEmail).pipe(catchError(this.handlerUserError));
  }

  //Autorizacion que valida restablecimiento de contraseña olvidada
  authorizeHeaders(headers:HttpHeaders): Observable<AuthorizeHeaders>{
    return this.http.post<AuthorizeHeaders>(AUTHORIZE_RESET_PASS_URL, { headers }).pipe(catchError(this.handlerUserError));
  }

  // ENVIA LA CONTRASEÑA NUEVA AL EMAIL
  resetPass(userPassword:UserResetPass, headers:HttpHeaders): Observable<UserResetPass>{
    return this.http.post<UserResetPass>(RESET_PASS_URL, userPassword, { headers }).pipe(catchError(this.handlerUserError));
  }

  // TRAE UN USUARIO POR EMAIL
  getUserByEmail(userEmail: string): Observable<UserLogin> {
    return this.http.get<UserLogin>(`${USER_BY_EMAIL_URL}/${userEmail}`).pipe(catchError(this.handlerUserError));
  }

  // EDITA UN USUARIO
  updateUser(userId: number, user: UserLogin): Observable<UserLogin> {
    return this.http.patch<UserLogin>(`${USER_BY_EMAIL_URL}/${userId}`, user).pipe(catchError(this.handlerUserError));
  }

  // ELIMINA UN USUARIO
  // deleteUser(userId:number):Observable<{}>{
  //   return this.http.delete<UserLogin>(`${USER_BY_ID_URL}/${userId}`).pipe(catchError(this.handlerUserError));
  // }

  handlerUserError(error: any): Observable<never> {
    let errorMessage = 'Error';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    return throwError(() => (errorMessage));
  }

}
