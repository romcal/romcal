const path = require('path');

module.exports = {

  entry: {
    romcal: './src/index.js'
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.join(__dirname, 'dist'),
    library: 'Romcal',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: [".js", ".mjs", ".json"]
  },

  mode: 'production',

  devtool: 'source-map',

  module: {
    rules: [
      // All files with '.js' extension will be handled by 'babel-loader'.
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {}
};
