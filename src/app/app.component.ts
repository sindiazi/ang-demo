import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StoreModule} from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'ang-demo';
}
