module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
      'react-refresh',
      "react",
      "prettier",
      "@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": "error",
    "no-console": "warn",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
