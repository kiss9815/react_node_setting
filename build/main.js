'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV == 'development') {
    //클라이언트만 development 에서 다르게 돌아감
    console.log('Server is running on development mode');

    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', _express2.default.static(__dirname + '/../public'));

app.get('/hello', function (req, res) {
    return res.send('Can you hear me?');
});

// 라우트 예제입니다.

app.use('/posts', _posts2.default);

//서버는 production 이든 ㅇdevelopment 든 똑같이 돌아감
var server = app.listen(port, function () {
    console.log('Express listening on port', port);
});