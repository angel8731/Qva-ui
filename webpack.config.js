"use strict";
const path = require('path');
const webpack = require('webpack');
// import webpack plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

let webpackConfig = {

    entry : {
        app: './src/app.js'
    },
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : '[name].bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : extractLess.extract({
                    fallback : 'style-loader',
                    use : 'css-loader'
                })
            },
            {
                test : /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
        ]
    },
    plugins : [
        new ExtractTextPlugin('styles.css'),
        new webpack.EnvironmentPlugin({
            NODE_ENV : 'development',
            DEBUG : false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 9000
    }

}
module.exports = webpackConfig;
