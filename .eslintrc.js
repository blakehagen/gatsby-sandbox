const path = require('path');

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    "ecmaVersion": 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'plugins': [
    'jsx-a11y',
    'import',
    'react',
    'prettier',
  ],
  'extends': [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  'globals': {
    '_': false,
    'autoprefixer': false,
    'path': false,
  },
  'root': true,
  'rules': {
    "prettier/prettier": 'error',
    'global-require': 'off',
    'object-curly-newline': 'off',
  },
};
