import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from '../../interfaces/iuserlogin';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';

@Directive({
  selector: '[appShowForRoles]'
})
export class ShowForRolesDirective {

  @Input('appShowForRoles') allowedRoles?: Role[];
  private sub?: Subscription;

  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit():void{
    
  }

  ngOnDestroy():void{
    this.sub?.unsubscribe();
  }

}
