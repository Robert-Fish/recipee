module.exports = {
  extends: 'airbnb',
  settings: {
    ecamScript: 6,
    jsx: true,
  },
  parser: 'babel-eslint',
  rules: {
    'no-shadow': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
  },
  plugins: ['react'],
  globals: {
    window: true,
    document: true,
  },
};
