import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MyElementComponent } from './app/my-element/my-element.component';
import {OverviewComponent} from './app/overview-component/overview.component';

(async () => {
  const app = await createApplication();
  const myElement = createCustomElement(MyElementComponent, {
    injector: app.injector,
  });

  const originalConnectedCallback = myElement.prototype.connectedCallback;
  myElement.prototype.connectedCallback = function () {
    if (originalConnectedCallback) {
      originalConnectedCallback.call(this);
    }

    this.addEventListener('greet', (event: any) => {
      console.log('Custom Event Received:', event.detail);
    });
  };

  customElements.define('my-element', myElement);

  const overviewElement = createCustomElement(OverviewComponent, { injector: app.injector });
  customElements.define('overview-element', overviewElement); // Register Web Component
})();
