const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');

// Builds an ES5 compliant version of romcal for use as a node module in servers
module.exports = merge(common, {
  output: {
    filename: '[name].server.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BABEL_ENV: JSON.stringify('server')
      },
    })
  ]
  /*
  externals: {
    'lodash': '_',
    'moment': 'moment',
    'moment-range': 'range',
    'moment-recur': 'recur'
  }
  */
});