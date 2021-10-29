const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const TerserWebpackPlugin  = require('terser-webpack-plugin')
const path = require('path') 

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
		        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        // TODO: configure workbox-webpack-plugin
        new WorkboxPlugin.GenerateSW()
    ],
    optimization: {
        // TODO: Add Optimization for JS and CSS
        minimizer : [
			new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
            new OptimizeCSSAssetsPlugin()
           
		]
    }
    
}
