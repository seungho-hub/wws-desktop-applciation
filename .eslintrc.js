module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    quotes: ['error', 'single'],
    'import/no-extraneous-dependencies': 'off',
  },
  ignorePatterns: [],
};
