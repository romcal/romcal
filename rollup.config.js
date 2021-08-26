import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import dts from 'rollup-plugin-dts';
import cjs from '@rollup/plugin-commonjs';

const getBabelOptions = ({ useESModules }) => ({
  exclude: /node_modules/,
  babelHelpers: 'runtime',
  plugins: [['@babel/transform-runtime', { useESModules }]],
  comments: false,
});

const input = './lib/index.ts';
const name = 'Romcal';
const sourcemap = true;
const plugins = [
  typescript({
    sourceMap: true,
    module: 'esnext',
    target: 'esnext',
    moduleResolution: 'node',
    // tsconfig: './tsconfig.release.json', // todo: tsconfig not imported correctly
  }),
  json(),
  terser({ keep_classnames: true }),
  nodeResolve(),
];

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  'i18next',
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  i18next: 'i18next',
};

export default [
  // CJS (CommonJS) — Suitable for Node and other bundlers (alias: commonjs).
  {
    input,
    external,
    output: {
      format: 'cjs',
      file: pkg.main,
      sourcemap,
      globals,
      exports: 'default',
    },
    plugins: [...plugins, cjs(), babel(getBabelOptions({ useESModules: false }))],
  },

  // ES - Keep the bundle as an ES module file. Suitable for other bundlers and inclusion
  // as a <script type=module> tag in modern browsers (alias: esm, module).
  {
    input,
    external,
    output: { format: 'esm', file: pkg.module, sourcemap },
    plugins: [...plugins, babel(getBabelOptions({ useESModules: true }))],
  },

  // UMD (Universal Module Definition) — Works as amd, cjs, and iife all in one.
  // - AMD (Asynchronous Module Definition) — Used with module loaders like RequireJS.
  // - CJS
  // - IIFE A self-executing function suitable for inclusion as a <script> tag.
  {
    input,
    external,
    output: {
      format: 'umd',
      name,
      file: `dist/umd/romcal.js`,
      sourcemap,
      globals,
      exports: 'default',
    },
    plugins: [...plugins, babel(getBabelOptions({ useESModules: true }))],
  },

  // Rollup types into a unique and clean index.d.ts
  {
    input: './tmp/dts/index.d.ts',
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts()],
  },
];
