/* eslint quote-props: [ "error", "always" ] */
module.exports = {
  "parser": "babel-eslint",

  "plugins": ["internations"],

  "extends": ["airbnb"],

  "env": {
    "jquery": false,
    "browser": true,
    "commonjs": true, // for webpack
    "es6": true,
  },

  "settings": {
    "react": {
      // React version, default to the latest React stable release
      "version": "16.0",
    },
  },

  "globals": {
    "__DEV__": false,
  },

  "rules": {
    // Disallow spaces between the function name or function keyword and the opening parenthesis
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always",
      },
    ],

    // Require return statements to either always or never specify values
    "consistent-return": "off",

    // Disallow the type conversion with shorter notations.
    "no-implicit-coercion": "error",

    // No constant expressions inside conditions (airbnb uses "warn")
    "no-constant-condition": "error",

    // one declaration for uninitialized variables, one declaration PER initializer variable
    "one-var": [
      "error",
      {
        "uninitialized": "always",
        "initialized": "never",
      },
    ],

    // Disallow quotes around object literal property names, except when they are strictly required
    "quote-props": ["error", "as-needed", { "numbers": true }],

    // airbnb sets this to 'object'
    "dot-location": ["error", "property"],

    // airbnb sets this to 'warn'
    "func-names": "off",

    // Require a capital letter for constructors
    "new-cap": [
      "error",
      {
        "capIsNewExceptions": [
          "Object",
          "Function",
          "Number",
          "String",
          "Boolean",
          "Date",
          "Array",
          "Symbol",
          "RegExp",

          // $.Deferred
          "Deferred",

          // $.Event
          "Event",
        ],
      },
    ],

    "no-restricted-globals": [
      "error",
      {
        "name": "event",
        "message": "Use local parameter instead.",
      },
    ],

    "no-restricted-properties": [
      "error",
      {
        "object": "_",
        "property": "extend",
        "message": "Please use Object.assign instead.",
      },
      {
        "object": "$",
        "property": "post",
        "message": "Please use io.post instead",
      },
      {
        "object": "$",
        "property": "ajax",
        "message": "Please use io.ajax instead",
      },
      {
        "object": "$",
        "property": "load",
        "message": "Please use io.load instead",
      },
      {
        "object": "$",
        "property": "get",
        "message": "Please use io.get instead",
      },
      {
        "object": "$",
        "property": "getScript",
        "message": "Please use io.ajax instead",
      },
      {
        "object": "jQuery",
        "property": "post",
        "message": "Please use io.post instead",
      },
      {
        "object": "jQuery",
        "property": "ajax",
        "message": "Please use io.ajax instead",
      },
      {
        "object": "jQuery",
        "property": "load",
        "message": "Please use io.load instead",
      },
      {
        "object": "jQuery",
        "property": "get",
        "message": "Please use io.get instead",
      },
      {
        "object": "jQuery",
        "property": "getScript",
        "message": "Please use io.ajax instead",
      },
    ],

    // -------------------------------------------------
    // These should be enabled when not in "legacy" code:
    // -------------------------------------------------

    // Disallow declaration of variables already declared in the outer scope
    "no-shadow": "off",

    // Disallow use of new operator when not part of the assignment or comparison
    "no-new": "off",

    // Allow dangling underscores in identifiers
    "no-underscore-dangle": "off",

    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never", // airbnb sets this to 'always-multiline'
      },
    ],

    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-use-before-define": "off",
    "no-continue": "off",
    "no-lonely-if": "off",
    "import/prefer-default-export": "off",

    //------------------------------------------------------------------------------
    // React and JSX rules
    //------------------------------------------------------------------------------

    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],

    // allow jsx in files named .js
    "react/jsx-filename-extension": "off",

    // align to the right of the last prop
    "react/jsx-closing-bracket-location": ["warn", "tag-aligned"],
    "react/sort-prop-types": [
      "error",
      {
        "ignoreCase": true,
        "callbacksLast": false,
      },
    ],

    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": "error",

    // Require defaultProp for every non-required prop
    "react/require-default-props": "off",

    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-for": "off",

    //------------------------------------------------------------------------------
    // Import plugin
    //------------------------------------------------------------------------------

    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",

    //------------------------------------------------------------------------------
    // Custom rules
    //------------------------------------------------------------------------------

    // Restrict _.bindAll to be used without method names
    "internations/valid-bindall": "off",

    // Disallow any ViewComponent usage
    // restrict usage of `new` operator for View Components instantiation
    "internations/no-view-components": "error",
    "internations/no-view-create": "error",

    // Allow only one signature for modules definition
    "internations/valid-define": "error",

    // Don't allow fdescribe and fit
    "internations/no-fdescribe": "error",
    "internations/no-fit": "error",

    "internations/routes": "error",
    "internations/no-object-defaults": "error",
    "internations/return-this-from-render": "error",
    "internations/no-underscore-bind": "error",
    "internations/no-calls-in-default-options": "error",
    "internations/no-this-options-assignment": "error",
    "internations/pick-options-in-initialize": "error",
    "internations/no-import-underscore": "error",

    // Prettier rule and conflicting ones
    "prettier/prettier": "error",
    "indent": "off",
    "max-len": "off",
    "arrow-parens": "off",
    "curly": ["error", "all"],
    "newline-per-chained-call": "off",
    "no-confusing-arrow": "off",
    "no-mixed-operators": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-useless-concat": "off",
    "one-var-declaration-per-line": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "semi": "off",
    "wrap-iife": "off",
    "no-extra-semi": "off",
    "flowtype/space-after-type-colon": "off",
    "function-paren-newline": "off",
    "object-curly-newline": "off",
    "prefer-destructuring": [
      "error",
      {
        "array": false,
      },
    ],
    "semi-style": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "prefer-object-spread": "off",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off",
    "no-redeclare": "off",
    "no-unused-vars": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-curly-newline": "off",
    "react/sort-comp": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "no-else-return": "off",
    "react/state-in-constructor": "off",
    "lines-between-class-members": "off",
    "react/static-property-placement": "off",
    "react/no-access-state-in-setstate": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-fragments": "off",
    "react/button-has-type": "off",
    "max-classes-per-file": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-curly-brace-presence": "off",
    "operator-assignment": "off",
    "import/order": "off",
  },
};
