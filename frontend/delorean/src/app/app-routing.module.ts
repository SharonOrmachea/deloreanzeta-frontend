import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/pages/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'login', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
  { path: '**', component: NotFoundComponent },
  { path: 'home',component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
