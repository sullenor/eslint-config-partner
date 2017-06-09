'use strict';

module.exports = {
  env: {
    jest: true,
  },
  extends: [
    './index.js',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'script',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
  },
};
