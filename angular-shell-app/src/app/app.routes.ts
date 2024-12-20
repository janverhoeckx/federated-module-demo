import {Routes} from '@angular/router';
import {WebComponentWrapper, WebComponentWrapperOptions} from '@angular-architects/module-federation-tools';
import {loadRemoteModule} from '@angular-architects/module-federation';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'react-shared-state-library-example',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './shared-library-example-app',
      elementName: 'shared-library-example-react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'react-url-params-example',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './url-parameters-example-app',
      elementName: 'url-parameters-example-react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'react-router-example',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './react-router-example-app',
      elementName: 'react-router-example-react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'react-different-version-example',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:3001/remoteEntry.js',
      remoteName: 'react_different_version',
      exposedModule: './react-different-version',
      elementName: 'react-different-version-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'angular-remote',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './routes'
      })
        .then(m => m.routes)
  },
  {
    path: 'angular-remote-different-version',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:2402/remoteEntry.js',
      remoteName: 'angular-remote-different-version-app',
      exposedModule: './Component',
      elementName: 'app.module.ts'
    } as WebComponentWrapperOptions
  },
];
