module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@next/next/no-img-element": 0,
    "arrow-body-style": 0,
    "default-case": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-console": "error",
    "no-unused-vars": "error",
    "no-restricted-properties": 0,
    "no-unreachable": 0,
    "no-undef": "error",
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "react/destructuring-assignment": 0,
    "react/display-name": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "react/prop-types": 0,
    "react/require-default-props": 0,
  },
};
