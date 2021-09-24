module.exports = {
  extends: ["@pixelmatters/eslint-config-pixelmatters"],

  rules: {
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    "prettier/prettier": ["error", { singleQuote: false }],

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
