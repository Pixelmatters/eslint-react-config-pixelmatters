"use strict";

const configs = require("../");
const { ESLint } = require("eslint");

// creates a ESLint CLI instance to test some code for rule correctness
const cli = new ESLint({
  useEslintrc: false,
  baseConfig: configs,

  overrideConfig: {
    rules: {
      // It is okay to import development dependencies in tests.
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
      // this doesn't matter for tests
      "lines-between-class-members": 0,
    },
  },
});

/**
 * Execute the linter in a given piece of text.
 *
 * @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
 *
 * @param {string} text
 * @returns
 */
async function lintCode(text) {
  const linter = await cli.lintText(text);
  return linter[0];
}

/**
 * Check if the results has the given error.
 *
 * @param {ESLint.LintResult} result
 * @param {string} errorName
 * @return {boolean}
 */
function hasError(result, errorName) {
  return result.messages.some((error) => error.ruleId === errorName);
}

test("should export and object", () => {
  expect(typeof configs === "object").toBe(true);
});

test("allow no explicity any", async () => {
  const results = await lintCode(`const age: any = "seventeen";`);
  expect(hasError(results, "@typescript-eslint/no-explicit-any")).toBeFalsy();
});

test("allow not specify the module boundary type", async () => {
  const results = await lintCode(`export default function() {
    return 1;
  }`);
  expect(
    hasError(results, "@typescript-eslint/explicit-module-boundary-types")
  ).toBeFalsy();
});
