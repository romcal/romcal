const glob = require('glob');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  mode: 'production',
  entry: {
    romcal: './lib/main.ts',
    ...(() =>
      glob.sync('lib/bundles/*.ts').reduce((obj, path) => {
        obj['bundles/' + path.match(/([^/]+)\.ts$/gm)[0].replace(/\.ts$/, '')] = './' + path;
        return obj;
      }, {}))(),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@romcal': path.resolve(__dirname, 'lib'),
    },
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  output: {
    library: 'Romcal',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  // devtool: 'source-map',
};
