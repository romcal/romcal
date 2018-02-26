const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    romcal: [
      './src/index.js'
    ]
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  plugins: [
  ],
  
  module: {
    rules: [
      // All files with a '.js' or '.jsx' extension will be handled by 'babel-loader'.
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/, },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};