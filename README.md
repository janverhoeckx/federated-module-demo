# Module Federation Demo
This project is a demo showing the capabilities of Module Federation. Module Federation is a feature of Webpack 5 that 
allows you to share code between different applications. This is useful for creating microfrontends, where you can have
different applications that are built and deployed independently, but can share code between them.

## Security


## Used frameworks and libraries
This project uses the following frameworks and libraries:
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Angular Architects - Angular Module Federation Plugin](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/)
- [Angular](https://angular.io/)
- [React](https://reactjs.org/)


## How to run
1. Run `npm install` in the application directories (angular-shell-app, react-app, shared-library)
2. Run `npm start` in the application directories
3. The applications are now running on `http://localhost:4200/` (Angular shell) and `http://localhost:3000/` (React module)

## Concepts
This demo project includes the following concepts:

1. [Angular Shell Application](#angular-shell-application)
2. [Angular as a remote module (TODO)](#angular-as-a-remote-module)
3. [Multi-framework](#multi-framework)
   1. [Angular shell with React remote](#angular-shell-with-react-remote)
4. [Sharing state between modules](#sharing-state-between-modules)
   1. [With a plain Javascript library](#with-a-plain-javascript-library)
   2. [With Javascript CustomEvents (TODO)](#with-javascript-customevents)
   3. [Via URL parameters (TODO)](#via-url-parameters)

## Angular Shell Application
The [Angular Shell Application](./angular-shell-app) is a simple Angular application which is used as a shell.
## React Shell application
TODO

## Angular as a remote module
TODO

## Multi-framework
It is possible to use different frameworks in the same application. This is generally not recommended as it introduces 
extra complexity. For example, if you are using a Angular specific Design System, you can't reuse it in React. It can 
be useful in some cases, for example if you have a large Angular application and you want to include a React module from
a React application.

With the [react-app](./react-app) this project demonstrates how to use a React application as a remote module in an 
Angular shell.

## Sharing state between modules
An important aspect of Module Federation is sharing state between modules. Sharing state is, for example, necessary to 
to make a module aware of the authenticated user. Another example is sharing the result of something a user has done in a 
module with another module or shell, for example making a payment. 

Sharing state can be done in different ways. This project demonstrates three ways of sharing state between modules.

### With a shared library
By using a shared library in combination with Module Federation singleton dependency configuration, it is possible to
share state between modules. This project demonstrates this with a simple "plain javascript" library shared between a
module and shell. See the [shared-library](./shared-library) for the implementation.

Pros:
- Explicit interface of the state which is shared between modules
- When used with TypeScript, type safety is guaranteed
- With SemVer breaking changes can be made explicit

Cons:
- A library must be published and shared between modules

### Via URL parameters


### With Javascript CustomEvents
Publishing and subscribing to CustomEvents is a way to share state between modules. This project demonstrates this with
a simple example. See the [react app](./react-app) and [angular shella app](./angular-shell-app) for the implementation.

Pros:
- No need to publish and share a library

Cons:
- No explicit interface of the state which is shared between modules
- No type safety
- Breaking changes are not made explicit
- When an event is missed (for example because a module is not loaded yet), the state is not shared

See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent for more information about CustomEvents.
