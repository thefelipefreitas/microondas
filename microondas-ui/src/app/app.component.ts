import { Component } from '@angular/core';
import { MicroondasComponent } from './features/microondas/microondas.component';

@Component({
  selector: 'app-root',
  imports: [MicroondasComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'microondas-ui';
}
