import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/pages/home.component";

import { SignInComponent } from "./sign-in/pages/sign-in.component";

import { LoginComponent } from "./login/pages/login.component";
import { FormLoginComponent } from './login/components/form/form-login.component';
import { FormIdentifyComponent } from './login/components/form-identify-user/form-identify.component';
import { FormCodeUserComponent } from './login/components/form-code-user/form-code-user.component';

import { StoreComponent } from './store/page/store.component';
import { ProductsComponent } from "./store/components/all products/products.component";
import { IdProductComponent } from "./store/components/id-product/id-product.component";
import { HiringComponent } from "./hiring/page/hiring.component";





const routes: Routes = [
  { path: '', component: PublicComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'login', component: LoginComponent, children: [
        { path: '', component: FormLoginComponent },
        { path: 'identify', component: FormIdentifyComponent },
        { path: 'code', component: FormCodeUserComponent }
      ]},
      { path: 'store', component: StoreComponent, children: [
        { path: '', component: ProductsComponent },
        { path: 'product/:id', component: IdProductComponent },
        { path: 'category/:category', component: ProductsComponent },

      ]},
      { path: 'hiring', component: HiringComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PublicRoutingModule {}
