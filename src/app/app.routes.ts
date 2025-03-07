import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)
  },
  {
   path:':id',
   loadComponent: () => import('./user/user.component').then(mod => mod.UserComponent)
  }
];
