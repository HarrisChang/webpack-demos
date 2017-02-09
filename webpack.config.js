/**
 * Created by admin on 2017/2/9.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: __dirname + "/app/main.js",
    output: {path: __dirname + "/build", filename: "[name]-[hash].js"},
    module: {
        loaders: [{test: /\.json$/, loader: "json"}, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')}]
    },
    postcss: [require('autoprefixer')],
    plugins: [newHtmlWebpackPlugin({template: __dirname + "/app/index.tmpl.html"}), newwebpack.optimize.OccurenceOrderPlugin(), newwebpack.optimize.UglifyJsPlugin(), newExtractTextPlugin("[name]-[hash].css")]
}