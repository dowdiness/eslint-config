module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    'ecmaFeatures': {
      'jsx': true
    },
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'quotes': 0,
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
  }
}
