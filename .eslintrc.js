module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    chrome: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    eqeqeq: "error",
    "no-console": "warn",
  },
}
