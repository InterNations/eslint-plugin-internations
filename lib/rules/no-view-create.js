/**
 * @fileoverview
 * Rule to flag use of deprecated View.create method
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

                // check callee object
                const obj = node.callee.object;
                if (!obj || obj.type !== 'Identifier' || obj.name !== 'View') {
                    return;
                }

                // check callee name
                const property = node.callee.property;
                if (!property || property.type !== 'Identifier' || property.name !== 'create') {
                    return;
                }

                context.report(node, '`View.create` syntax is deprecated. Please use `this.initSubview` instead.');
            },
        };
    },
};
