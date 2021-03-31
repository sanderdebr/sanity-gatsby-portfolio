module.exports = {
  extends: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "no-console": 0,
  },
  plugins: ["prettier"],
};
