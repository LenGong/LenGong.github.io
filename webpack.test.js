var helpers = require('./webpack-config/helpers');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'null'
        }, {
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: 'null'
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            loader: 'raw'
        }]
    },

    plugins:[
      new webpack.ContextReplacementPlugin(
          // The (\\|\/) piece accounts for path separators in *nix and Windows
          /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
          path.join(process.cwd(), 'app')
      ),
    ]
};
