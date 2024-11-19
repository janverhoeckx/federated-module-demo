import {Component, Injector} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {createCustomElement} from "@angular/elements";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-remote-different-version-app';

  constructor(injector: Injector) {
    const AppElement = createCustomElement(AppComponent, {injector});
    customElements.define('angular-remote-different-version-app-element', AppElement);
  }
}
