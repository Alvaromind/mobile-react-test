const RULE = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:xstate/all",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        moduleDirectory: ["node_modules", "src/"],
        extensions: [".js", ".jsx"],
      },
    },
    jest: { version: 26 },
  },
  plugins: ["react", "react-hooks", "import"],
  rules: {
    "no-unused-vars": RULE.WARN,
    "no-param-reassign": RULE.OFF,
    "react/destructuring-assignment": RULE.WARN,
    "react/no-unused-prop-types": RULE.WARN,
    "react/no-array-index-key": RULE.OFF,
    "react/require-default-props": RULE.OFF,
    "react/jsx-props-no-spreading": RULE.OFF,
    "object-curly-newline": RULE.OFF,
    "react/jsx-filename-extension": [
      RULE.ERROR,
      { extensions: [".js", ".jsx"] },
    ],
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function",
    }],
    "react/prop-types": RULE.OFF,
    "arrow-parens": [RULE.ERROR, "as-needed"],
    "jsx-a11y/anchor-is-valid": [
      RULE.WARN,
      {
        components: ["Link"],
        aspects: ["invalidHref"],
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "max-len": ["error", { code: 130 }],
    "react/jsx-one-expression-per-line": [RULE.OFF],
    "import/no-extraneous-dependencies": [RULE.OFF],
    "import/extensions": [
      RULE.ERROR,
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
    "no-use-before-define": [RULE.OFF],
  },
  overrides: [
    {
      files: ["*.test.js"],
      plugins: ["jest", "testing-library"],
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
    },
  ],
};
