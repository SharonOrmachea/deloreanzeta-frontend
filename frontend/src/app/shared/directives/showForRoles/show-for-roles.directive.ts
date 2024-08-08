import { Directive, ElementRef, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Directive({
  selector: '[appShowForRoles]'
})

export class ShowForRolesDirective {

  @Input('showForRoles') roles:string[] = [];

  constructor(
    private authService: AuthService,
    private el: ElementRef
  ) { }

  @Input() set appShowForRoles(role: string){
    const userRole = this.authService.userValue().email;
    const userHaveAccess = this.roles.some(roles => userRole.includes(roles));

    if(!userHaveAccess) {
      this.el.nativeElement.style.display = 'none';
    }
  }

}
