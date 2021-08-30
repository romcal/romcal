import babel from '@rollup/plugin-babel';
import cjs from '@rollup/plugin-commonjs';
import { glob } from 'glob';
import coreConfig, { getBabelOptions, plugins } from './rollup.core';

const toCamelCase = (str) =>
  str.toLowerCase().replace(/((?:-|_|\s)\w)/g, (k) => k[1].toUpperCase());

const includedBundles = 'tmp/bundles/**/*';

// Initialize build config for all calendar bundle files
const bundlesConfig = glob.sync(includedBundles, { cwd: __dirname }).reduce((obj, input) => {
  const name = input.split('/').slice(0, -1).pop();
  const locale = input.split('/').pop().split('.').slice(0, -1).pop();

  return [
    ...obj,
    {
      input,
      output: { format: 'cjs', file: `dist/bundles/${name}/cjs/${locale}.js` },
      plugins: [
        ...plugins(false, [includedBundles]),
        cjs({ sourceMap: false }),
        babel(getBabelOptions({ useESModules: false })),
      ],
    },
    {
      input,
      output: { format: 'esm', file: `dist/bundles/${name}/esm/${locale}.js` },
      plugins: [
        ...plugins(false, [includedBundles]),
        babel(getBabelOptions({ useESModules: true })),
      ],
    },
    {
      input,
      output: {
        format: 'umd',
        name: name
          .split('.')
          .map((n) => toCamelCase(n))
          .join('_'),
        file: `dist/bundles/${name}/umd/${locale}.js`,
      },
      plugins: [
        ...plugins(false, [includedBundles]),
        babel(getBabelOptions({ useESModules: true })),
      ],
    },
  ];
}, []);

export default [
  /// Rollup the core library
  ...coreConfig,

  // Rollup all calendar bundle files
  ...bundlesConfig,
];
