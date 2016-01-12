var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'eventsource-polyfill',
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.join(__dirname, 'src')
			},
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	resolveLoader: { root: path.join(__dirname, 'node_modules') },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};