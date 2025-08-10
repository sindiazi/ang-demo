import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-order-list',
  imports: [RouterLink],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
  standalone: true
})
export class OrderListComponent {

}
