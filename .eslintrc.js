module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'import-helpers/order-imports': [
      'off',
      {
        newlinesBetween: 'always',
        groups: ['/^@shared/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'desc', ignoreCase: true },
      },
    ],
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/export': 'off',
    'import/default': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error'],
    camelcase: 'off',
    'no-undef': 'off',
    'no-use-before-define': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
};
