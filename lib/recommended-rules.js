/* eslint quote-props: [ "error", "always" ] */
module.exports = {
    'parser': 'babel-eslint',

    'plugins': [
        'internations',
    ],

    'extends': [
        'airbnb',
    ],

    'env': {
        'jquery': false,
        'browser': true,
        'commonjs': true, // for webpack
        'es6': true,
    },

    'settings': {
        'react': {
            // React version, default to the latest React stable release
            'version': '15.0',
        },
    },

    'globals': {
        '__DEV__': false,
    },

    'rules': {
        // Max line length
        'max-len': ['error', 120, 4, {
            'ignoreUrls': true,
            'ignoreComments': false,
            'ignoreRegExpLiterals': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
        }],

        // Disallow spaces between the function name or function keyword and the opening parenthesis
        "space-before-function-paren": ["error", "never"],

        // Require return statements to either always or never specify values
        'consistent-return': 'off',

        // Disallow the type conversion with shorter notations.
        'no-implicit-coercion': 'error',

        // No constant expressions inside conditions (airbnb uses "warn")
        'no-constant-condition': 'error',

        // one declaration for uninitialized variables, one declaration PER initializer variable
        'one-var': ['error', {
            'uninitialized': 'always',
            'initialized': 'never',
        }],

        // Disallow quotes around object literal property names, except when they are strictly required
        'quote-props': ['error', 'as-needed', { 'numbers': true }],

        // 4 spaces indentation
        'indent': ['error', 4, { 'SwitchCase': 1 }],

        // airbnb sets this to 'object'
        'dot-location': ['error', 'property'],

        // airbnb sets this to 'warn'
        'func-names': 'off',

        // Require a capital letter for constructors
        'new-cap': ['error', {
            'capIsNewExceptions': [
                'Object',
                'Function',
                'Number',
                'String',
                'Boolean',
                'Date',
                'Array',
                'Symbol',
                'RegExp',

                // $.Deferred
                'Deferred',

                // $.Event
                'Event',
            ],
        }],

        'no-restricted-properties': ['error', {
            'object': '_',
            'property': 'extend',
            'message': 'Please use Object.assign instead.',
        }, {
            'object': '$',
            'property': 'post',
            'message': 'Please use io.post instead',
        }, {
            'object': '$',
            'property': 'ajax',
            'message': 'Please use io.ajax instead',
        }, {
            'object': '$',
            'property': 'load',
            'message': 'Please use io.load instead',
        }, {
            'object': '$',
            'property': 'get',
            'message': 'Please use io.get instead',
        }, {
            'object': '$',
            'property': 'getScript',
            'message': 'Please use io.ajax instead',
        }, {
            'object': 'jQuery',
            'property': 'post',
            'message': 'Please use io.post instead',
        }, {
            'object': 'jQuery',
            'property': 'ajax',
            'message': 'Please use io.ajax instead',
        }, {
            'object': 'jQuery',
            'property': 'load',
            'message': 'Please use io.load instead',
        }, {
            'object': 'jQuery',
            'property': 'get',
            'message': 'Please use io.get instead',
        }, {
            'object': 'jQuery',
            'property': 'getScript',
            'message': 'Please use io.ajax instead',
        }],

        // -------------------------------------------------
        // These should be enabled when not in "legacy" code:
        // -------------------------------------------------

        // Disallow declaration of variables already declared in the outer scope
        'no-shadow': 'off',

        // Disallow use of new operator when not part of the assignment or comparison
        'no-new': 'off',

        // Allow dangling underscores in identifiers
        'no-underscore-dangle': 'off',

        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never', // airbnb sets this to 'always-multiline'
        }],

        'no-param-reassign': 'off',
        'no-prototype-builtins': 'off',
        'no-use-before-define': 'off',
        'no-continue': 'off',
        'no-lonely-if': 'off',
        'import/prefer-default-export': 'off',

        //------------------------------------------------------------------------------
        // React and JSX rules
        //------------------------------------------------------------------------------

        'react/forbid-prop-types': ['error', { 'forbid': ['any', 'array'] }],

        // indent jsx and jsx props 4 spaces
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],

        // allow jsx in files named .js
        'react/jsx-filename-extension': 'off',

        // align to the right of the last prop
        'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
        'react/sort-prop-types': ['error', {
            'ignoreCase': true,
            'callbacksLast': false,
        }],

        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'error',

        // Require defaultProp for every non-required prop
        'react/require-default-props': 'off',

        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-for': 'off',

        //------------------------------------------------------------------------------
        // Import plugin
        //------------------------------------------------------------------------------

        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',

        //------------------------------------------------------------------------------
        // Custom rules
        //------------------------------------------------------------------------------

        // Restrict _.bindAll to be used without method names
        'internations/valid-bindall': 'off',

        // Disallow any ViewComponent usage
        // restrict usage of `new` operator for View Components instantiation
        'internations/no-view-components': 'error',
        'internations/no-view-create': 'error',

        // Allow only one signature for modules definition
        'internations/valid-define': 'error',

        // Don't allow fdescribe and fit
        'internations/no-fdescribe': 'error',
        'internations/no-fit': 'error',

        'internations/routes': 'error',
        'internations/no-object-defaults': 'error',
        'internations/return-this-from-render': 'error',
        'internations/no-underscore-bind': 'error',
        'internations/no-calls-in-default-options': 'error',
        'internations/no-this-options-assignment': 'error',
        'internations/pick-options-in-initialize': 'error',
        'internations/no-import-underscore': 'error',
    },
};
