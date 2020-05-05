import { MultiConfigurationFactory } from 'webpack';
import webpack = require('webpack');
import { join, resolve } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import tsTransformPaths from '@zerollup/ts-transform-paths';

//github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-478042178
delete process.env.TS_NODE_PROJECT;

const getDevTool = (mode: webpack.Configuration['mode']): webpack.Options.Devtool =>
  mode === 'production' ? 'source-map' : 'inline-source-map';

const getTsConfigPathsPlugin = (): TsconfigPathsPlugin => {
  const tsconfigPathsPlugin = new TsconfigPathsPlugin({
    baseUrl: resolve(__dirname, '.'),
    configFile: resolve(__dirname, './tsconfig.json'),
  });
  return tsconfigPathsPlugin;
};

const getResolveExtensions = (): webpack.Resolve => ({
  extensions: ['.ts', '.js', '.json'],
  plugins: [getTsConfigPathsPlugin()],
});

const getEntryPoints = (): string[] => {
  return [join(__dirname, 'src/index.ts')];
};

const getWebpackOutput = (subpath: string): webpack.Output => ({
  path: join(__dirname, `/dist/${subpath}`),
});

const getTsLoaderRuleSet = (
  module = 'es5',
  mode: webpack.Configuration['mode'] = 'production',
): webpack.RuleSetUseItem => {
  let options: webpack.RuleSetQuery = {
    configFile: 'tsconfig.build.json',
    colors: true,
    compilerOptions: {
      outDir: './dist/es5',
      declaration: false,
      ...(mode === 'production' && { sourceMap: true }),
    },
    /**
     * This is a very very important piece of code to make this library work properly
     * https://stackoverflow.com/questions/51353762/compiling-typescript-path-aliases-to-relative-paths-for-npm-publishing
     */
    getCustomTransformers: program => {
      const transformer = tsTransformPaths(program);
      return {
        before: [transformer.before], // for updating paths in generated code
        afterDeclarations: [transformer.afterDeclarations], // for updating paths in declaration files
      };
    },
  };
  if (module === 'esm') {
    options = {
      ...options,
      compilerOptions: {
        ...options.compilerOptions,
        outDir: './dist/esm',
        declaration: true,
      },
    };
  }
  const ruleSetItem: webpack.RuleSetUseItem = {
    loader: 'ts-loader',
    options,
  };
  return ruleSetItem;
};

const getBabelRuleSetForEs5 = (): webpack.RuleSetUseItem => ({
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3',
          debug: false,
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
      globalObject: 'this',
      auxiliaryComment: 'romcal - The Liturgical Calendar generator',
    },

    module: {
      rules: [
        getHtmlLoader(),
        {
          test: /\.ts(x?)$/,
          exclude: [/node_modules/, '/src/**/*.test.ts'],
          use: [getBabelRuleSetForEs5(), getTsLoaderRuleSet('es5', mode)],
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

    entry: getEntryPoints(),

    // https://stackoverflow.com/questions/33069325/export-class-in-es6-not-working
    output: {
      ...getWebpackOutput('esm'),
      filename: 'index.js',
      library: 'romcal',
      libraryTarget: 'umd',
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.BUILD_TYPE': JSON.stringify('ESM'),
      }),
      getBundleAnalyzerPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: [/node_modules/],
          use: [getTsLoaderRuleSet('esm', mode)],
        },
      ],
    },
  },
];

export default configurations;
