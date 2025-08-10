import { Routes } from '@angular/router';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import {OrdersComponent} from './pages/orders-main/orders.component';

export const ORDER_ROUTES: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'list', component: OrderListComponent },
  { path: ':id', component: OrderDetailsComponent },
];
