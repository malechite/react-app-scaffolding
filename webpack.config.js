module.exports = {
    context: __dirname,
    entry: [
        './src/app/main.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: [
                        ['import', [{ libraryName: 'antd', style: 'css' }]]
                    ],
                    presets: ['react', 'react-hmre', 'es2015']
                },
                cacheDirectory: true
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader:'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=assets/[name]-[hash].[ext]' },
            { test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    devtool: 'source-map'
};
