const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.css$/,
			// exclude: /node_modules/,
			loader: ['style-loader', 'css-loader']
		}],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		host: '0.0.0.0',
		port: 8001,
		proxy: {
			'/': {
				target: 'http://122.21.141.229:9081',
				secure: false
			}
		},
		hot: true
	}
});
