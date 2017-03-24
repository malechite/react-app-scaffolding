var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    return {
        context: __dirname,
        entry: [
            '../src/main.js'
        ],
        resolve: {
            modules: [
                path.join(__dirname, '../src'),
                'node_modules'
            ],
            alias: {
                Styles: path.resolve(__dirname, '../src/styles'),
                Utilities: path.resolve(__dirname, '../src/shared/utilities')
            }
        },
        output: {
            path: __dirname + '../dist',
            publicPath: '/',
            filename: '[name]-[hash].js',
            chunkFilename: '[name]-[chunkhash].js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'react-hmre', 'es2015']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(woff|woff2)$/,
                    use:'url-loader?prefix=font/&limit=5000'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: 'url-loader?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    use: 'file-loader?name=assets/[name]-[hash].[ext]'
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: 'url-loader?limit=100000'
                }
            ]
        },
        devtool: 'eval',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function(module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../src/index.html'),
                filename: 'index.html',
                inject: 'body'
            })
        ]
    };
};
