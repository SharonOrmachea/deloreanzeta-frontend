import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';
import { UserResponse } from '../../interfaces/iuserlogin';
import { AuthService } from '../../services/auth/auth.service';

@Directive({
  selector: '[appLoginDirective]',
})
export class LoginDirectiveDirective {
  @Input('appLoginDirective') allowedUser?: UserResponse[];
  private sub?: Subscription;

  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.user$
      .pipe(
        map((user: UserResponse) =>
          Boolean(user && this.allowedUser?.includes(user))
        ),
        distinctUntilChanged(),
        tap((user) =>
          user
            ? this.viewContainerRef.createEmbeddedView(this.templateRef)
            : this.viewContainerRef.clear()
        )
      )
      .subscribe();
    //console.log(this.sub);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
