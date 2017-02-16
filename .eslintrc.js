const recommended = require('./lib/recommended-rules');
const lodash = require('lodash');

module.exports = {
    extends: 'eslint:recommended',

    env: {
        es6: true,
        node: true,
    },

    parserOptions: recommended.parserOptions,

    // Enable the same rules as `plugin:internations/recommended` would, except the internations and react rules.
    rules: lodash.pickBy(recommended.rules, (value, key) => !key.startsWith('internations') && !key.startsWith('react')),
};
