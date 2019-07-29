const webpack = require('webpack');
const path = require('path');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
const os = require('os');

const vendors = [
	'vue',
	'ant-design-vue',
	'ant-design-vue/dist/antd.css'
];

module.exports = {
	context: __dirname,
	output: {
		path: path.join(__dirname, '../depend'),
		filename: '[name].dll.js',
		library: '[name]_[hash]',
	},
	entry: {
		"vendor": vendors,
	},
	module:{
		rules: [{
			test: /\.css$/,
			loader: ['style-loader', 'css-loader']
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js(x)?$/,
			loader: 'babel-loader'
		}, {
			test: /\.(ttf|woff)$/,
			loader: 'file-loader'
		}]
	},
	resolve: {
		// extensions: ['', '.js', '.css', '.scss','.vue'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'antd-css$': 'ant-design-vue/dist/antd.css'
		}
	},
	plugins: [
		new UglifyJsParallelPlugin({
			workers: os.cpus().length,
			mangle: true,
			exclude: /\.min\.js$/,
			output: { comments: false },
			compressor: {
				warnings: false,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.DllPlugin({
			path:  path.join(__dirname, '../depend', '[name]-manifest.json'),
			name: '[name]_[hash]',
		})
	]
};
