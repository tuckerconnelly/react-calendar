/*eslint-disable no-console */

'use strict';

var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname + '/dist/')));

app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/dist/' + 'index.html'));
});

app.listen(8000, function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Example app listening at http://localhost:8000');
});