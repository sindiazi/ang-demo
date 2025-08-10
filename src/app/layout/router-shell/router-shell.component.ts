import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-router-shell',
  imports: [RouterOutlet],
  templateUrl: './router-shell.component.html',
  styleUrl: './router-shell.component.scss',
  standalone: true,
})
export class RouterShellComponent {

}
