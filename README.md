<h1 align="center">
  eslint-react-config-pixelmatters
</h1>

<h3 align="center">
  An ESLint config standard for Pixelmatters projects that use React.
</h3>

<p align="center">
This is a ESLint config that you can use in your projects.
</p>

<p align="center">
  <a href="https://github.com/Pixelmatters/eslint-react-config-pixelmatters/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="eslint-react-config-pixelmatters is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@pixelmatters/eslint-react-config-pixelmatters">
    <img src="https://img.shields.io/npm/v/@pixelmatters/eslint-react-config-pixelmatters.svg" alt="Current npm package version." />
  </a>
  <a href="https://github.com/Pixelmatters/eslint-react-config-pixelmatters/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=pixelmatters_">
    <img src="https://img.shields.io/twitter/follow/pixelmatters_.svg?label=Follow%20@pixelmatters_" alt="Follow @pixelmatters_" />
  </a>
</p>

## 🚀 Get Up and Running

You can install this package using the package manger of your choice.

This package requires you to add some missing peer dependencies:
* [esLint](https://www.npmjs.com/package/eslint)
* [prettier](https://www.npmjs.com/package/prettier)
* [typescript](https://www.npmjs.com/package/typescript)
* [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

### Add the new dependencies

**If you are using pnpm:**

```shell
pnpm install -D @pixelmatters/eslint-react-config-pixelmatters @typescript-eslint/eslint-plugin eslint-plugin-prettier typescript eslint prettier
```

**If you are using yarn:**

```shell
yarn add -D @pixelmatters/eslint-react-config-pixelmatters @typescript-eslint/eslint-plugin eslint-plugin-prettier typescript eslint prettier
```

**If you are using npm:**

```shell
npm install --save-dev @pixelmatters/eslint-react-config-pixelmatters @typescript-eslint/eslint-plugin eslint-plugin-prettier typescript eslint prettier
```

### Tell ESLint to use this config

Create an `.eslintrc.js`  file in the root of your project and add the following code:

``` js
module.exports = {
  extends: ['@pixelmatters/eslint-react-config-pixelmatters'],
};
```

At this point you should be good to go 👍

## 🤝 How to Contribute

Whether you're helping us fix bugs, improve the docs, or spread the word, thank you! 💪 🧡

Check out our [**Contributing Guide**](https://github.com/Pixelmatters/eslint-react-config-pixelmatters/blob/master/CONTRIBUTING.md) for ideas on contributing and setup steps.

## :memo: License

Licensed under the [MIT License](./LICENSE).
