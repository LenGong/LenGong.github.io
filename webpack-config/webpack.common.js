var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {

    resolve: {
        extensions: ['.ts', '.js', '.css']
    },

    module: {
        loaders: [{
            test: /\.(html|htm)$/,
            loader: 'html-loader',
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|mp3)$/,
            loader: 'file-loader?name=images/[name].[hash].[ext]'
        }, {
        }, {
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            })
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            loader:  'raw-loader'
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(process.cwd(), 'app')
        ),

        new HtmlWebpackPlugin({
            template: helpers.root('src', 'index.html'),
        })
    ]
};
