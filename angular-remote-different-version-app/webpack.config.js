const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'angular-remote-different-version-app',

  exposes: {
    './Component': './src/app/app.component.ts',
    "./routes": "./src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({ singleton: false, strictVersion: false, requiredVersion: 'auto' }),
  },

});
