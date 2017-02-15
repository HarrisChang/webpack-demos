var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app',  //编译的入口文件
        index: './index'  //编译的入口文件
    },
    output: {
        publicPath: '/build/',  //服务器根路径
        path: './build',  //编译到当前目录
        filename: '[name].js'  //编译后的文件名
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel?preset=es2015']
            },
            {
                test: /\.css$/,
                loader: ['style', 'css', 'autoprefixer']
            },
            {
                test: /\.less/,
                loader: ['style', 'css', 'autoprefixer', 'less']
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=1200&name=[hast].[ext]'  //limit后面的参数，当图片大小小于该参数时，会自动启用base64编码图片
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')  //将公用模块打包进common.js
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']  //后缀名自动补全
    }
}