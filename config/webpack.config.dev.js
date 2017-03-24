const webpackMerge = require('webpack-merge');
// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.conf.base.js');

let webpackConfig = webpackMerge(commonConfig(),{

    plugins : [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : 'src/index.html'
        })
    ]

})

module.exports = webpackConfig;
