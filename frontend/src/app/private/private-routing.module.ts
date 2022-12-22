import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PrivateComponent } from "./private.component";
import { ResetPassComponent } from "./reset-pass/pages/reset-pass.component";
import { CartComponent } from './cart/page/cart.component';
import { ProductsComponent } from "../public/store/components/all products/products.component";
import { StoreComponent } from "../public/store/page/store.component";
import { StoreAdminComponent } from "./Admin/store-admin/pages/store-admin.component";



const routes: Routes = [
  { path: '', component: PrivateComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'recover/password', component: ResetPassComponent },
      { path: 'store', component: StoreComponent, children: [
        { path: '', component: ProductsComponent },
        { path: 'cart', component: CartComponent },
      ]},
      { path: 'admin/store', component: StoreAdminComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PrivateRoutingModule {}
