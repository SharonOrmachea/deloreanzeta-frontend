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
    console.log('user: ', this.authService.userValue())
    const user = this.authService.userValue();

    if(user && user.role){
      const userRole = this.authService.userValue().role;
      const userHaveAccess = this.roles.some(roles => userRole.includes(roles));
      if(!userHaveAccess) {
        this.el.nativeElement.style.display = 'flex';
      }
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }

}
