# eslint-plugin-internations
[![npm version](https://badge.fury.io/js/eslint-plugin-internations.svg)](https://badge.fury.io/js/eslint-plugin-internations)

Custom ESLint rules and recommended rule configuration for internal InterNations usage.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-internations` and its peer dependencies:

```
(
  export PKG=eslint-plugin-internations;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/@/@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-internations` and its peer dependencies globally.

## Usage

Add `internations` to the `plugins` section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "internations"
    ]
}
```

Then, add `plugin:internations/recommended` to the `extends` section:

```json
{
    "extends": [
        "plugin:internations/recommended"
    ]
}
```

You may optionally configure any specific rules you want to override under the `rules` section:

```json
{
    "rules": {
        "internations/rule-name": "error"
    }
}
```
