# eslint-plugin-internations

Custom ESLint rules for internal InterNations usage

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-internations`:

```
$ npm install eslint-plugin-internations --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-internations` globally.

## Usage

Add `internations` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "internations"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "internations/rule-name": 2
    }
}
```
