import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable} from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../services/auth/auth.service';
import { UserResponse } from '../interfaces/iuserlogin';

@Injectable({
  providedIn: 'root'
})

export class CheckLoginGuard implements CanActivate {

  constructor(private authService:AuthService){}

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe( take(1), map(
      (user:UserResponse) => (!user ? true : false)
    ));
  }

}
