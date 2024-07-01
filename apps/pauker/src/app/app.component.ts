import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [ RouterOutlet],
  selector: 'app-root',
  template:`<router-outler/>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pauker';
}
