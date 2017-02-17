var path = require('path')
var ROOT = path.resolve(__dirname)
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
        'page1/main': ROOT + '/src/page1/main'
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
