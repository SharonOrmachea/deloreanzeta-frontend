import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PrivateComponent } from "./private.component";
import { ResetPassComponent } from "./reset-pass/pages/reset-pass.component";



const routes: Routes = [
  { path: '', component: PrivateComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      // { path: 'recover/code', component: CodeComponent},
      { path: 'recover/password', component: ResetPassComponent}
    ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PrivateRoutingModule {}
