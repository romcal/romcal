const glob = require('glob');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const bundles = glob
  .sync('bundles/*.ts')
  .splice(0, 900)
  .reduce((obj, path) => {
    obj['bundles/' + path.match(/([^/]+)\.ts$/gm)[0].replace(/\.ts$/, '')] = './' + path;
    return obj;
  }, {});

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  mode: 'production',
  entry: {
    romcal: './lib/main.ts',
    ...bundles,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // Disable type checker because of high performance impact during the build
          // Note: types are already checked in a previous CI task (npm run build), in GitHub Actions,
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
};
