module.exports = {
  extends: ['../config/.eslintrc.js'],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
