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
                name: "react-different-version",
                library: {type: "var", name: "react_different_version"},
                filename: "remoteEntry.js",
                exposes: {
                    './react-different-version': './App.js',
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
                    },
                    {
                        from: './*.css'
                    }
                ]
            })
        ],
        devServer: {
            port: 3001,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        }
    }
}
