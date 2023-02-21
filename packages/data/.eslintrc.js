const base = require('../../.eslintrc');

module.exports = {
  ...base,
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
};
