module.exports = {
  extends: ['../../packages/config/.eslintrc.js'],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
