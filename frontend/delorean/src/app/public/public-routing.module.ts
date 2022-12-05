import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/pages/home.component";
import { LoginComponent } from "./login/pages/login.component";
import { SignInComponent } from "./sign-in/pages/sign-in.component";

const routes: Routes = [
  { path: '', component: PublicComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'sign-in', component: SignInComponent},
      { path: 'login', component: LoginComponent}
      // { path: 'login/identify', component: IdentifyComponent},

    ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PublicRoutingModule {}
