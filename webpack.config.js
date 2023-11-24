const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	output: {
	path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	devServer: {
		static: './dist',
		port: 8081
	},
	module: {
		rules: [
			{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
			},
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
			},
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              esModule: true,
              sourceMap: true,
            },
          },
          'sass-loader'
        ],
      },
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
	],
};