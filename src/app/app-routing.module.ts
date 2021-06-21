import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarModule } from './nav-bar/nav-bar.module';

const routes: Routes = [
  { path: 'nav-bar', loadChildren: () => import('./nav-bar/nav-bar.module').then(m => m.NavBarModule)},
  { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
