var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-1', 'react']
				},
				include: path.join(__dirname, 'src')
			},
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
		]
	}
};