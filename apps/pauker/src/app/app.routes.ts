import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path:'',
  loadComponent: () => import('./feature/auth/auth.component').then(c =>c.AuthComponent)
}];
