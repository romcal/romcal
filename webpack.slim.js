const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// Builds a web version of romcal excluding the libraries it depends on.
// This results in a much smaller build of the library that consumes less network bandwidth.
// This build is especially useful when the consumer site already has those libraries included 
// for other uses on their page.
// The consumer will have to ensure these libraries are loaded on their page to use romcal
module.exports = merge(common, {
  output: {
    filename: '[name].bundle.slim.min.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    })
  ],
  externals: {
    'lodash': '_',
    'moment': 'moment',
    'moment-range': 'range',
    'moment-recur': 'recur'
  }
});