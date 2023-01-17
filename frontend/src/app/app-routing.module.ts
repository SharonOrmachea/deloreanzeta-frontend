import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/pages/home.component';
import { NewsComponent } from './public/news/page/news.component';
import { StoreComponent } from './public/store/page/store.component';
import { ToursComponent } from './public/tours/pages/tours.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: '', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'news', component: NewsComponent },
  { path: 'tours', component: ToursComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
