var path = require('path')
var ROOT = path.resolve(__dirname)
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('[name].css')

module.exports = {
    entry: {
        'page1/main': ROOT + '/src/page1/main',
        'page2/main': ROOT + '/src/page2/main',
        'page3/main': ROOT + '/src/page3/main',
        'page4/main': ROOT + '/src/page4/main',
    },
    output: {
        filename: '[name].js',
        path: ROOT + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: ROOT + '/src/page1',
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {

            }
        ]
    }
}