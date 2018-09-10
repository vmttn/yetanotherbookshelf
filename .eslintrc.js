module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'import', 'jsx-a11y'],
  parserOptions: {
    sourceType: 'module',
    impliedStrict: true,
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  }
};