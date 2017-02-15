'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js'
        /*events: './events.js',
        contact: './contact.js'*/
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist/assets',
        publicPath: '/assets'
    },
    plugins: [
        //在output文件里，如果有任意模块加载了两次或更多，它就会被打包进一个叫commons.js的文件里。
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        })
    ],
    devServer: {
        contentBase: __dirname + '/src'
    }
}