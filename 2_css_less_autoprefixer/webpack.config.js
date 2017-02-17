var path = require('path')
var ROOT = path.resolve(__dirname)
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('[name].css')

module.exports = {
    entry: {
        'page1/main': ROOT + '/src/page1/main',
        'page2/main': ROOT + '/src/page2/main',
        'page3/main': ROOT + '/src/page3/main'
    },
    output: {
        path: ROOT + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [
                                    autoprefixer
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [
                                    autoprefixer
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }
}