var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack-config/webpack.common.js');
var helpers = require('./webpack-config/helpers.js');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'polyfills': helpers.root('src', 'polyfills.ts'),
        'vendor': helpers.root('src', 'vendor.ts'),
        'app': helpers.root('src', 'main.ts'),
    },

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:9000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts-loader', 'angular2-template-loader',
                'angular2-load-children-loader'
            ]
        }]
    },

    plugins: [
        new ExtractTextPlugin('styles/[name].css')
    ],

    devServer: {
        port: 9000,
        inline: true,
        historyApiFallback: true,
        stats: 'minimal'
    },

    devtool: 'source-map'
});
