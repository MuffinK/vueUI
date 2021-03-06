
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
	entry: {
		index:  './src/index.js'
	},
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
		},{
			test: /\.css$/,
			oneOf: [
				// 这里匹配 `<style module>`
				{
					resourceQuery: /module/,
					use: [
						"vue-style-loader",
						{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '../'}
					},
						{
							loader: "css-loader",
							options: {
								modules: true,
								localIdentName: "[local]_[hash:base64:5]"
							}
						},
					]
				},
				// 这里匹配普通的 `<style>` 或 `<style scoped>`
				{
					use: [
						"vue-style-loader",
							{
							loader: MiniCssExtractPlugin.loader,
							options: { publicPath: '../'}
						},
						"css-loader"
					]
				}
			]
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
		// new ParallelUglifyPlugin({
		// 	cacheDir: './.uglifyCache',
		// }),
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
