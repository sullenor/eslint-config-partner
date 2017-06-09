'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/commonjs.js',
    './rules/possible-errors.js',
    './rules/stylistic.js',
    './rules/variables.js',
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
};