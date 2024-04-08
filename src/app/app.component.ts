import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-mentor-challenges';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
}
