const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.min.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    })
  ]
});