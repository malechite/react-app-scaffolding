var express = require('express');
var path = require('path');
var app = express();

if(process.env.NODE_ENV == 'development') {
    //dev only
    var webpackConfig = require('../webpack.dev-config');
    var webpack = require('webpack');
    var compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../src/index.html'));
});

var server = app.listen(3000, function () {
    console.log('Listening on port %s...', server.address().port);
});
