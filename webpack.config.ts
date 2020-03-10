import { MultiConfigurationFactory } from 'webpack';
import webpack = require('webpack');
import { join, resolve } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
const resolveTsconfigPathsToAlias = ({ tsconfigPath = './tsconfig.json', webpackConfigBasePath = __dirname } = {}): {
  [key: string]: string;
} => {
  const { paths } = require(tsconfigPath).compilerOptions;
  const aliases: {
    [key: string]: string;
  } = {};
  Object.keys(paths).forEach(item => {
    const key = item.replace('/*', '');
    const value = resolve(webpackConfigBasePath, paths[item][0].replace('/*', '').replace('*', ''));
    aliases[key] = value;
  });
  return aliases;
};

const getDevTool = (mode: string): webpack.Options.Devtool =>
  mode === 'production' ? 'source-map' : 'inline-source-map';

const getResolveExtensions = (): webpack.Resolve => ({
  alias: resolveTsconfigPathsToAlias(),
  extensions: ['.ts', '.js', '.json'],
});

const getEntryPoints = (): string[] => {
  return [join(__dirname, 'src/index.ts')];
};

const getWebpackOutput = (subpath: string): webpack.Output => ({
  path: join(__dirname, `/dist/${subpath}`),
});

const getTsLoaderRuleSet = (tsConfigFilePath: string): webpack.RuleSetUseItem => ({
  loader: 'ts-loader',
  options: {
    configFile: join(__dirname, tsConfigFilePath),
    colors: true,
  },
});

const getBabelRuleSetForEs5 = (): webpack.RuleSetUseItem => ({
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3',
          debug: true,
          ignoreBrowserslistConfig: true,
          targets: {
            browsers: [
              '>= 1%',
              'last 1 major version',
              'not dead',
              'Chrome >= 45',
              'Firefox >= 38',
              'Edge >= 12',
              'Explorer >= 10',
              'iOS >= 9',
              'Safari >= 9',
              'Android >= 4.4',
              'Opera >= 30',
            ],
          },
        },
      ],
    ],
  },
});

const getHtmlLoader = (): webpack.RuleSetRule => ({
  test: /\.html$/,
  loader: 'html-loader',
});

const getOptimizationEs5 = (): webpack.Options.Optimization => ({
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      // Externalize all includes from node_modules
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        enforce: true,
      },
    },
  },
});

/**
 * Analyze bundle size
 */
const getBundleAnalyzerPlugin = (): BundleAnalyzerPlugin => {
  const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: true,
  });
  return bundleAnalyzerPlugin;
};

const getHtmlWebpackPlugin = (): HtmlWebpackPlugin => {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    hash: true,
    title: 'romcal - Test Page',
    template: 'src/index.html',
    base: './dist',
    meta: {
      charset: {
        charset: 'utf-8',
      },
      'X-UA-Compatible': {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge',
      },
    },
    minify: false,
  });
  return htmlWebpackPlugin;
};

const configurations: MultiConfigurationFactory = (env, { mode }) => [
  // ES5
  {
    devtool: getDevTool(mode),
    resolve: getResolveExtensions(),

    entry: {
      romcal: [...getEntryPoints()],
    },

    output: {
      ...getWebpackOutput('es5'),
      filename: '[name].bundle.es5.js',
      chunkFilename: '[name].bundle.es5.js',
      crossOriginLoading: 'anonymous',
      libraryTarget: 'umd',
      libraryExport: 'default',
      library: 'romcal',
      jsonpFunction: 'romcalWebpackJsonpFunction',
      globalObject: 'window',
      auxiliaryComment: 'romcal - The Liturgical Calendar generator',
    },

    module: {
      rules: [
        getHtmlLoader(),
        {
          test: /\.ts(x?)$/,
          exclude: [/node_modules/, '/src/**/*.test.ts'],
          use: [getBabelRuleSetForEs5(), getTsLoaderRuleSet('tsconfig.es5.json')],
        },
      ],
    },

    optimization: getOptimizationEs5(),

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.BUILD_TYPE': JSON.stringify('ES5'),
      }),
      getBundleAnalyzerPlugin(),
      getHtmlWebpackPlugin(),
    ],
  },
  // ESM
  {
    devtool: getDevTool(mode),
    resolve: getResolveExtensions(),

    entry: {
      romcal: [...getEntryPoints()],
    },

    output: {
      ...getWebpackOutput('esm'),
      filename: 'index.js',
      chunkFilename: '[name].js',
      publicPath: '/dist/esm/',
      library: 'romcal',
      libraryTarget: 'umd',
      libraryExport: 'Romcal'
    },

    plugins: [
      getBundleAnalyzerPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.BUILD_TYPE': JSON.stringify('ESM'),
      }),
    ],

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: [/node_modules/, '/src/**/*.test.ts'],
          use: [getTsLoaderRuleSet('tsconfig.esm.json')],
        },
      ],
    },
  },
];

export default configurations;
