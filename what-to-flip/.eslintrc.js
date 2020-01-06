module.exports = {
  env: {
    browser: true, // To not get warning about functions available in the browser, e.g. `fetch`
  },
  extends: [
    "airbnb-base",
    // Only this is needed to integrate Prettier, see: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "react-hooks",
  ],
  rules: {
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")], // https://stackoverflow.com/q/39114446/2771889
    "import/prefer-default-export": 0, // https://stackoverflow.com/q/54245654/2771889
    "react/sort-comp": "off", // https://github.com/yannickcr/eslint-plugin-react/issues/1214
    "no-console": 0,
    'no-restricted-syntax': [ // Allow `ForOfStatement` but keep other defaults https://github.com/airbnb/javascript/issues/1271#issuecomment-548688952
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: 'detect', // https://github.com/yannickcr/eslint-plugin-react#configuration
    },
  },
};
