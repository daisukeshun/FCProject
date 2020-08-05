const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebPackPlugin = require("html-webpack-plugin");


module.exports = {	
	mode: 'development',
	entry: './src/index.js',
	output: 
	{
		filename: 'heap.js',
		path: path.resolve(__dirname, 'dist')
	},
	module:
	{
		rules:
		[
			{
				test: /\.s[ac]ss$/i,
				use:
				[
					'style-loader',
					'css-loader',
					'sass-loader'
				]

			},
			{
				test: /\.pug$/i,
				use:
				[
					'pug-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: 
				[
				  'file-loader'
				],


			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
				  'file-loader',
				],
			}
		],

	},
	plugins:
	[
		new HTMLWebPackPlugin({ 
			template: './src/index.pug'
		}),
		new CleanWebpackPlugin(),
	]
}
