import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [],
  imports: [BrowserModule]
})
export class AppModule {
  constructor(injector: Injector) {
    const element = createCustomElement(AppComponent, { injector: injector });
    customElements.define('my-web-component', element);
  }
}
