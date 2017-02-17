/**
 * @fileoverview
 * Rule to flag when a call expression is used within the default options object
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
                let current = node;

                // loops through all parents of a call expression until it finds
                // either a property name of 'extend' or the parent isn't of type property
                // ensuring all nested call expressions are found
                while ((current = current.parent) !== null) {
                    if (current.type === 'ObjectExpression') {
                        const variable = current.parent;
                        if (variable.type !== 'Property') {
                            break;
                        }
                        if (variable.key.name === 'defaultOptions' || variable.key.name === 'options') {
                            if (variable.parent &&
                                variable.parent.parent &&
                                variable.parent.parent.callee &&
                                variable.parent.parent.callee.property &&
                                variable.parent.parent.callee.property.name === 'extend') {

                                context.report(
                                    node,
                                    'Function call not allowed within the defaultOptions or options object'
                                );
                                break;
                            }
                        }
                    }
                }
            },
        };
    },
};
