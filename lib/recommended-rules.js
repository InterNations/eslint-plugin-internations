/* eslint quote-props: [ "error", "always" ] */
module.exports = {
    'parser': 'babel-eslint',

    'plugins': [
        'internations',
        'react',
    ],

    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],

    'env': {
        'jquery': false,
        'browser': true,
        'commonjs': true, // for webpack
        'es6': true,
    },

    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true,
        },
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
        'max-len': ['error', 120],

        // Enforces parentheses around arrow function parameters, except when there is only one argument
        'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],

        // Enforce trailing commas in multiline object/array literals
        'comma-dangle': ['error', 'always-multiline'],

        // Use const
        'prefer-const': 'error',

        // Can't change const
        'no-const-assign': 'error',

        // Don't allow vars
        'no-var': 'error',

        // Prefer object shorthand
        'object-shorthand': 'error',

        // Disallow declaration of variables already declared in the outer scope
        'no-shadow': 'off',
        // Disallow use of new operator when not part of the assignment or comparison
        'no-new': 'off',
        // Enforce usage of semicolon
        'semi': 'error',
        // Allow dangling underscores in identifiers
        'no-underscore-dangle': 'off',
        // Disallow use of multiple spaces
        'no-multi-spaces': 'off',
        // Require return statements to either always or never specify values
        'consistent-return': 'off',
        'curly': 'error',
        // Disallow Primitive wrapper instances
        'no-new-wrappers': 'error',
        // Disallow the use of the Object constructor
        'no-new-object': 'error',
        // Disallow Function constructor
        'no-new-func': 'error',
        // Disallow reassignment of native Objects
        'no-native-reassign': 'error',
        // Disallow extending of native Objects
        'no-extend-native': 'error',
        // Disallow functions in loops
        'no-loop-func': 'error',
        // Disallow unnecessary nested blocks
        'no-lone-blocks': 'error',
        // No constant expressions inside conditions
        'no-constant-condition': 'error',
        'no-eval': 'error',
        'no-implied-eval': 'error',
        // Disallow unnecessary function binding
        'no-extra-bind': 'error',
        // Disallow the use of `arguments.caller` and `arguments.callee`
        'no-caller': 'error',
        // Disallow the type conversion with shorter notations.
        'no-implicit-coercion': 'error',
        // Enforce spacing around the * in generator functions
        'generator-star-spacing': ['error', { 'before': false, 'after': true }],

        // one declaration for uninitialized variables, one declaration PER initializer variable
        'one-var': ['error', {
            'uninitialized': 'always',
            'initialized': 'never',
        }],

        // Disallow use of variables before they are defined
        // except named function definitions
        'no-use-before-define': ['error', 'nofunc'],
        // No with Statements
        'no-with': 'error',
        'no-multiple-empty-lines': 'error',
        // Enforce single quotes
        'quotes': ['error', 'single'],
        // Enforce type-safe equality operators `===` and `!==`
        'eqeqeq': ['error', 'allow-null'],
        // Require immediate function invocation to be wrapped in parentheses
        'wrap-iife': ['error', 'inside'],
        // Encourages use of dot notation whenever possible
        'dot-notation': ['error', { 'allowKeywords': true }],
        // Disallow declaration of variables that are not used in the code
        'no-unused-vars': 'error',
        // Prefer the array literal notation [] to construct arrays
        'no-array-constructor': 'error',
        // Disallow Use of the Comma Operator
        'no-sequences': 'error',
        // Ensures that all function bodies are strict mode code, while global code is not
        'strict': ['error', 'safe'],
        // Require file to end with single newline
        'eol-last': 'error',
        'no-unused-expressions': 'error',
        // Disallow initializing to undefined
        'no-undef-init': 'error',
        // Disallow spaces in function calls
        'no-spaced-func': 'error',
        'no-shadow-restricted-names': 'error',
        // Disallow javascript: URLs
        'no-script-url': 'error',
        // Disallow assignment in return statement
        'no-return-assign': ['error', 'except-parens'],
        // Enforce hasOwnProperty() checks in for loops
        'guard-for-in': 'error',
        // Disallow labels.
        // Useful for catching arrow functions that wanted to return an object but forgot the parenthesis:
        // bad:
        // const fn = (state) => {
        //     foo: 'foo'
        // };
        //
        // good:
        // const fn = (state) => ({
        //     foo: 'foo'
        // });
        'no-labels': 'error',
        'no-restricted-properties': ['error', {
            'object': '_',
            'property': 'extend',
            'message': 'Please use Object.assign instead.',
        }, {
            'object': '$',
            'property': 'post',
            'message': 'Please io.post instead',
        }, {
            'object': '$',
            'property': 'ajax',
            'message': 'Please io.ajax instead',
        }, {
            'object': '$',
            'property': 'load',
            'message': 'Please io.load instead',
        }, {
            'object': '$',
            'property': 'get',
            'message': 'Please io.get instead',
        }, {
            'object': '$',
            'property': 'getScript',
            'message': 'Please io.ajax instead',
        }, {
            'object': 'jQuery',
            'property': 'post',
            'message': 'Please io.post instead',
        }, {
            'object': 'jQuery',
            'property': 'ajax',
            'message': 'Please io.ajax instead',
        }, {
            'object': 'jQuery',
            'property': 'load',
            'message': 'Please io.load instead',
        }, {
            'object': 'jQuery',
            'property': 'get',
            'message': 'Please io.get instead',
        }, {
            'object': 'jQuery',
            'property': 'getScript',
            'message': 'Please io.ajax instead',
        }],

        //------------------------------------------------------------------------------
        // Stylistic rules
        //------------------------------------------------------------------------------

        // Require camelcasing when naming variables
        'camelcase': 'error',
        // Disallow Yoda conditions
        'yoda': ['error', 'never'],
        // Enforce one true comma style: before line break
        'comma-style': ['error', 'last'],
        // Enforce spacing after commas
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        // No spacing before semicolons, enforce space after semicolon
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        // Enforces spacing after the colon in object literal properties, and no spacing before
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        // Require spaces around infix operators
        'space-infix-ops': 'error',
        // Require spaces following return, throw, and case
        'keyword-spacing': 'error',
        // Disallow quotes around object literal property names, except when they are strictly required
        'quote-props': ['error', 'as-needed', { 'numbers': true }],
        // Enforce spaces inside of curly braces in objects
        'object-curly-spacing': ['error', 'always'],
        // Only allow LF (UNIX-style) linebreaks
        'linebreak-style': ['error', 'unix'],
        'no-trailing-spaces': 'error',
        // Require consistent naming `that` when declaring an alias for `this`
        'consistent-this': ['error', 'that'],
        // Enforces "one true brace style"
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        // Disallow spaces between the function name or function keyword and the opening parenthesis
        'space-before-function-paren': ['error', 'never'],
        // Disallow spaces inside parentheses
        'space-in-parens': 'error',
        // Require space before blocks
        'space-before-blocks': 'error',
        // 4 spaces indentation
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        // Disallow spaces inside array brackets
        'array-bracket-spacing': ['error', 'never'],
        // Require spaces before/after word unary operators (e.g. typeof), forbid for non-words (e.g. ++foo)
        'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
        // Require parens when invoking a constructor
        'new-parens': 'error',
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

        //------------------------------------------------------------------------------
        // React and JSX rules
        //------------------------------------------------------------------------------

        // Prefer classes
        'react/prefer-es6-class': 'error',

        // Prefer stateless
        'react/prefer-stateless-function': 'error',

        // Require prop types
        'react/prop-types': ['error', { 'ignore': [], 'customValidators': [] }],

        'react/forbid-prop-types': ['error', { 'forbid': ['any', 'array'] }],

        // Multiple line returns must be wrapped in parens
        'react/jsx-wrap-multilines': ['error', {
            'declaration': true,
            'assignment': true,
            'return': true,
        }],

        // Always close tags that have no children
        'react/self-closing-comp': 'error',

        // Space before self-closing
        'react/jsx-space-before-closing': ['error', 'always'],

        // Sort ordering
        'react/sort-comp': ['error', {
            'order': [
                'static-methods',
                'lifecycle',
                '/^on.+$/',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                'everything-else',
                '/^render.+$/',
                'render',
            ],
        }],

        // No undeclared vars in JSX
        'react/jsx-no-undef': 'error',

        // Intent props 4 spaces too
        'react/jsx-indent-props': ['error', 4],

        // align to the right of the last prop
        'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],

        'react/sort-prop-types': ['error', {
            'ignoreCase': true,
            'callbacksLast': false,
        }],

        // Prevent React being marked as unused
        'react/jsx-uses-react': ['error'],

        // Prevent variables used being marked as unused
        'react/jsx-uses-vars': 'error',

        // Naming
        'react/jsx-pascal-case': 'error',

        // No deprecated stuff
        'react/no-deprecated': ['warn'],

        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 'error',

        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 'error',

        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'error',

        // Prevent usage of isMounted
        'react/no-is-mounted': 'error',

        // Prevent multiple component definition per file
        'react/no-multi-comp': ['error', { 'ignoreStateless': true }],

        // Prefer double quotes
        'jsx-quotes': 'error',

        // Omit superfluous true on props
        'react/jsx-boolean-value': 'error',

        // No prop duplicates
        'react/jsx-no-duplicate-props': 'error',

        // No strings in JSX
        'react/no-string-refs': 'error',

        // No unknown props
        'react/no-unknown-property': 'error',

        // React in scope
        'react/react-in-jsx-scope': 'error',

        // Prevent usage of Array index in keys
        'react/no-array-index-key': 'error',

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
        // Don't allow fdescribe
        'internations/no-fdescribe': 'error',
        // Don't allow fit
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
