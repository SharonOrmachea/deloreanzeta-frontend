import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Directive({
  selector: '[appShowForRoles]'
})

export class ShowForRolesDirective {

  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input() set appShowForRoles(role: string){
    const userValue = this.authService.userValue();
    const userRole = userValue.role;

    if(userRole === role) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
