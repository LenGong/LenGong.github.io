var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack-config/webpack.common.js');
var helpers = require('./webpack-config/helpers.js');

module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-module-eval-source-map',
  entry: {
    'polyfills':helpers.root('src', 'polyfills.ts'),
    'vendor': helpers.root('src', 'vendor.ts'),
    'app': helpers.root('src', 'main.aot.ts'),
  },

  output: {
    path: helpers.root('dest'),
    publicPath: 'http://localhost:9000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
      new ExtractTextPlugin('styles/[name].css')
  ],

  devServer: {
    // contentBase:helpers.root('dist'),
    port:9000,
    inline:true,
    historyApiFallback: true,
    stats: 'minimal'
  }
});
