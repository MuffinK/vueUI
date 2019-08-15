const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
	mode: "development",
	module: {
		rules: [
			{
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
			}
		]
	},
	devtool: 'source-map',
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		// proxy: {
		// 	"/": {
		// 		target: "http://122.21.141.229:9081",
		// 		secure: false
		// 	}
		// },
		hot: true
	}
});
