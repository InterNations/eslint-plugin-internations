/**
 * @fileoverview
 * Rule to flag when underscore bind is used over Function.prototype.bind
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

                // check callee object
                const obj = node.callee.object;
                const property = node.callee.property;
                if (!obj || obj.type !== 'Identifier') {
                    return;
                }

                if (obj.name === '_' && property.name === 'bind') {
                    context.report(node, 'prefer Function.prototype.bind over _.bind');
                }
            },
        };
    },
};
