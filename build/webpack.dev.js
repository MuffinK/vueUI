const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
	mode: "development",
	module: {
		rules: []
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		proxy: {
			"/": {
				target: "https://lu.lululuye.xyz:4443/",
				secure: false
			}
		},
		hot: true
	}
});
