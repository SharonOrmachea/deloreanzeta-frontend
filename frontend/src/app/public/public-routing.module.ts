import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/pages/home.component";
import { SignInComponent } from "./sign-in/pages/sign-in.component";
import { LoginComponent } from "./login/pages/login.component";
import { FormLoginComponent } from './login/components/form/form-login.component';
import { FormIdentifyComponent } from './login/components/form-identify-user/form-identify.component';
import { StoreComponent } from './store/page/store.component';
import { ProductsComponent } from "./store/components/all products/products.component";
import { IdProductComponent } from "./store/components/id-product/id-product.component";
import { HiringComponent } from "./hiring/page/hiring.component";

import { NewsComponent } from "./news/page/news.component";
import { AllNewsComponent } from "./news/components/all-news/all-news.component";
import { IdNewsComponent } from "./news/components/id-news/id-news.component";
import { ToursComponent } from "./tours/pages/tours.component";

import { CheckLoginGuard } from '../shared/guards/check-login.guard';




const routes: Routes = [
  { path: '', component: PublicComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'sign-in', component: SignInComponent, canActivate: [CheckLoginGuard], },
      { path: 'login', component: LoginComponent, canActivate: [CheckLoginGuard],
        children: [
          { path: '', component: FormLoginComponent, canActivate: [CheckLoginGuard] },
          { path: 'identify', component: FormIdentifyComponent, canActivate: [CheckLoginGuard] },
      ] },
      { path: 'store', component: StoreComponent,
        children: [
          { path: 'product/:id', component: IdProductComponent },
          { path: 'category/:category', component: ProductsComponent },

      ] },
      { path: 'hiring', component: HiringComponent },
      { path: 'news', component: NewsComponent, children: [
        { path: '', component: AllNewsComponent },
        { path: 'news/:id', component: IdNewsComponent },
      ]},
      { path: 'tours', component: ToursComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PublicRoutingModule {}
