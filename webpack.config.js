const glob = require('glob');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const description = require('./package.json').description;

const bundles = glob.sync('tmp/bundles/*.ts').reduce((obj, path) => {
  obj['bundles/' + path.match(/([^/]+)\.ts$/gm)[0].replace(/\.ts$/, '')] = './' + path;
  return obj;
}, {});

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  mode: 'production',
  entry: {
    'lib/index': './lib/index.ts',
    ...bundles,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
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
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
    auxiliaryComment: description,
  },
  devtool: 'source-map',
};
