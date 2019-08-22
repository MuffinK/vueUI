const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

const prodConfig = merge(common, {
	mode: "production",
	entry: {
		index: "./src/index.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [path.resolve("src"), path.resolve("node_modules")],
				use: [
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: true
						}
					}
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({}),
			new TerserPlugin({ parallel: true })
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
		// new webpack.DllReferencePlugin({
		// 	context: __dirname,
		// 	manifest: require('../depend/vendor-manifest.json'),
		// }),
		// new AddAssetHtmlPlugin({
		// 	filepath: require.resolve('../depend/vendor.dll.js'),
		// 	outputPath: './dist',
		// 	includeSourcemap: true,
		// 	publicPath: './dist'
		// }),
		// new BundleAnalyzer()
	]
});
module.exports = prodConfig;
