var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack-config/webpack.common.js');
var helpers = require('./webpack-config/helpers.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    entry: {
        'polyfills': helpers.root('src', 'polyfills.ts'),
        'vendor': helpers.root('src', 'vendor.ts'),
        'app': helpers.root('src', 'main.aot.ts'),
    },

    output: {
        path: helpers.root('dest'),
        publicPath: '/dest/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts-loader?configFileName=tsconfig-aot-last.json', 'angular2-template-loader',
                'angular2-load-children-loader'
            ]
        }]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        //new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new ExtractTextPlugin('styles/[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ],

    devtool: 'source-map'
});
