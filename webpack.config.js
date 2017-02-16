/**
 * Created by admin on 2017/2/16.
 */
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        //在*.bundle.js文件头部添加开发者信息
        new webpack.BannerPlugin('This file is created by HarrisChang.')
    ]
}