import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/pages/home.component";
import { LoginComponent } from "./login/pages/login.component";
import { SignInComponent } from "./sign-in/pages/sign-in.component";
import { FormIdentifyComponent } from './login/components/form-identify-user/form-identify.component';
import { FormCodeUserComponent } from './login/components/form-code-user/form-code-user.component';
import { FormLoginComponent } from './login/components/form/form-login.component';



const routes: Routes = [
  { path: '', component: PublicComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'sign-in', component: SignInComponent},
      { path: 'login', component: LoginComponent, children: [
        { path: '', component: FormLoginComponent},
        { path: 'identify', component: FormIdentifyComponent},
        { path: 'code', component: FormCodeUserComponent}
      ]}


    ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PublicRoutingModule {}
