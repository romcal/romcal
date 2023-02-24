module.exports = {
  extends: ['@romcal/eslint-config'],
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
