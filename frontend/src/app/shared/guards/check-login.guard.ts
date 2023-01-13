import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable} from 'rxjs';
import { map, take } from 'rxjs/operators';

import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})

export class CheckLoginGuard implements CanActivate {

  constructor(private userService:UserService){}

  canActivate(): Observable<boolean> {
    return this.userService.isLogged.pipe( take(1), map(
       (isLogged: boolean) => !isLogged)
      );

  }

}
