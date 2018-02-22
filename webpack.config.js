const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    romcal: [
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      // All files with a '.js' or '.jsx' extension will be handled by 'babel-loader'.
      { test: /\.jsx?$/, loader: "babel-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [],
  externals: {}
};