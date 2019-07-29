
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const path = require('path');

const prodConfig = merge(common, {
	mode: 'production',
	entry: ['@babel/polyfill', './src/index.js'],
	module: {
		rules: [{
			test: /\.jsx?$/,
			include: [path.resolve('src'), path.resolve('node_modules')],
			use: [{
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				}
			}]
		}, {
			test: /\.css$/,
			use: [{
				loader: MiniCssExtractPlugin.loader,
				options: { publicPath: '../'}
			}, 'css-loader']
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}]
	},
	resolve: {
		// extensions: ['', '.js', '.css', '.scss','.vue'],
	},
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new ParallelUglifyPlugin({
			cacheDir: './.uglifyCache',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('../depend/vendor-manifest.json'),
		}),
		new AddAssetHtmlPlugin({
			filepath: require.resolve('../depend/vendor.dll.js'),
			outputPath: './dist',
			includeSourcemap: true,
			publicPath: './dist'
		}),
	]
});
module.exports = prodConfig;
