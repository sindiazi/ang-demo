import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [
    RouterLink
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  standalone: true
})
export class OrdersComponent {

}
