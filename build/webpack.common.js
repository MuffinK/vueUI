const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	module: {
		rules: [ {
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.(ttf|woff|png|jpg)$/,
			loader: 'file-loader'
		}, {
			test: /\.tsx?$/,
			loader: 'ts-loader',
			options: {appendTsSuffixTo: [/\.vue$/]}
		},{
			test: /\.css$/,
			oneOf: [
				// 这里匹配 `<style module>`
				{
					resourceQuery: /module/,
					use: [
						"vue-style-loader",
						{
							loader: "css-loader",
							options: {
								modules: true,
								localIdentName: "[local]_[hash:base64:5]"
							}
						}
					]
				},
				// 这里匹配普通的 `<style>` 或 `<style scoped>`
				{
					use: ["vue-style-loader", "css-loader"]
				}
			]
		}]
	},
	entry: {
		'index': './src/index.js'
	},
	externals: {
		'/src/config': 'config'
	},
	resolve: {
		extensions: ['.js', '.css', '.scss','.vue', '.png', '.ts'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'antd-css$': 'ant-design-vue/dist/antd.css',
			// 'moment': 'moment/src/moment'
		}
	},
	plugins: [
		// new ModuleConcatenationPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
		}),
		new AddAssetHtmlPlugin({
			filepath: require.resolve('../src/config.js'),
			outputPath: './config',
			includeSourcemap: true,
			publicPath: './config'
		}),
		new CopyWebpackPlugin([{
			from: './depend/*.woff',
			to: './[name].[ext]'
		}, {
			from: './depend/*.ttf',
			to: './[name].[ext]'
		}, {
			from: './resources',
			to: './'
		}]),
		new VueLoaderPlugin()
	]
};
