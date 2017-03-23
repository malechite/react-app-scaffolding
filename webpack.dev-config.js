var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        './src/app/main.js',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
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
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
