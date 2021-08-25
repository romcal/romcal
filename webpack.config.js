const glob = require('glob');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { name, description } = require('./package.json');

const bundles = glob.sync('tmp/bundles/*.ts').reduce((obj, path) => {
  obj['bundles/' + path.match(/([^/]+)\.ts$/gm)[0].replace(/\.ts$/, '')] = './' + path;
  return obj;
}, {});

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  mode: 'production',
  entry: {
    index: './lib/index.ts',
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
    library: {
      name: 'Romcal',
      type: 'umd',
      auxiliaryComment: `${name} ${description}`,
      umdNamedDefine: true,
    },
    scriptType: 'module',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    globalObject: 'this',
  },
  devtool: 'source-map',
};
