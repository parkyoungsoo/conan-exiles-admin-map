const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/conan-exiles-admin-map.js',
    target: 'node',
    externals: [nodeExternals({
        allowlist: ['/\.(?|ejs)$)'],
    }),],
    output: {
        filename: 'conan-exiles-admin-map.js',
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/',
    },
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ejs$/,
                use: {
                    loader: 'ejs-compiled-loader',
                    options: {
                        htmlmin: true,
                        htmlminOptions: {
                            removeComments: true
                        }
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],

            }
        ],
    },

};