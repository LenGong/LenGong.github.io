var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack-config/webpack.common.js');
var helpers = require('./webpack-config/helpers.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  entry: {
    'polyfills':helpers.root('src', 'polyfills.ts'),
    'vendor': helpers.root('src', 'vendor.ts'),
    'app': helpers.root('src', 'main.ts'),
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  // loader: {
  //   htmlLoader: {
  //       minimize: false // workaround for ng2
  //   },
  // },

  plugins: [
    new webpack.NoErrorsPlugin(),
    //new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles/[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
