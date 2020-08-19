/**
 * @fileoverview
 * Rule to flag when any property being declared in `View.defaultOptions` or
 * in `Model.defaults` are objects
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {},
  },

  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type !== 'MemberExpression') {
          return;
        }

        // callee name should be 'extend'
        const property = node.callee.property;
        if (
          !property ||
          property.type !== 'Identifier' ||
          property.name !== 'extend'
        ) {
          return;
        }

        // first argument to .extend() should be an object literal
        if (
          node.arguments.length === 0 ||
          node.arguments[0].type !== 'ObjectExpression'
        ) {
          return;
        }

        // that object literal should contain a property named `defaults` or `defaultOptions`
        let defaults, defaultsPropertyName;
        node.arguments[0].properties.forEach(function(propObj) {
          if (
            propObj.key.name === 'defaults' ||
            propObj.key.name === 'defaultOptions'
          ) {
            defaults = propObj.value;
            defaultsPropertyName = propObj.key.name;
          }
        });

        // only checks object literals
        if (!defaults || defaults.type !== 'ObjectExpression') {
          return;
        }

        // find all properties defined inside the defaults object and make sure none of them
        // is declaring an object
        defaults.properties.forEach(function(propObj) {
          if (!propObj.value) {
            return;
          }

          if (propObj.value.type === 'NewExpression') {
            context.report(
              propObj,
              'a property of the `' +
                defaultsPropertyName +
                '` object must not be result of `new`',
            );
          }
          if (propObj.value.type === 'ObjectExpression') {
            context.report(
              propObj,
              'a property of the `' +
                defaultsPropertyName +
                '` object must not be an object',
            );
          }
          if (propObj.value.type === 'ArrayExpression') {
            context.report(
              propObj,
              'a property of the `' +
                defaultsPropertyName +
                '` object must not be an array',
            );
          }
        });
      },
    };
  },
};
