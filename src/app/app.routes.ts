import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {RouterShellComponent} from './layout/router-shell/router-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: RouterShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./features/orders/orders.routes').then((m) => m.ORDER_ROUTES),
      }
    ]
  }
];
