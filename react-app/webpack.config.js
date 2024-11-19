const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = options => {
    return {
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            publicPath: "auto",
            uniqueName: "mfe4"
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                                presets: ['@babel/react', '@babel/env']
                            }
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new ModuleFederationPlugin({

                // For remotes (please adjust)
                name: "react",
                library: {type: "var", name: "react"},
                filename: "remoteEntry.js", // <-- Meta Data
                exposes: {
                    './web-components': './app.js',
                    './shared-library-example-app': './shared-library-example-app.js'
                },
                shared: {
                    '@jan.verhoeckx/shared-library': {
                        singleton: true
                    },
                },
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './*.html'
                    }
                ]
            })
        ],
        devServer: {
            port: 3000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        }
    }
}
