// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
	module: {
		rules: [{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: ['style-loader', 'css-loader']
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
			// include: [path.resolve(__dirname, './src')]
		}, {
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader'
			}
			
			// , include: [path.resolve(__dirname, './src')]
		}, {
			test: /\.(ttf|woff)$/,
			loader: 'file-loader'
		}]
	},
	resolve: {
		// extensions: ['', '.js', '.css', '.scss','.vue'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'element-ui-css$': 'element-ui/lib/theme-chalk/index.css'
		}
	},
	plugins: [
		// new ModuleConcatenationPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
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
		// new AddAssetHtmlPlugin({
		// 	filepath: require.resolve('../depend/2fad952a20fbbcfd1bf2ebb210dccf7a.woff'),
		// 	outputPath: './',
		// 	includeSourcemap: true,
		// 	publicPath: './'
		// }),
		new CopyWebpackPlugin([{from: "./depend/*.woff", to: './[name].[ext]'}, {from: "./depend/*.ttf", to: './[name].[ext]'}]),
		new VueLoaderPlugin()
	]
}