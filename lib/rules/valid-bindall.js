/**
 * @fileoverview
 * Rule to flag when a function is called with deprecated syntax
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
                if (!obj || obj.type !== 'Identifier' || obj.name !== '_') {
                    return;
                }

                // check callee name
                const property = node.callee.property;
                if (!property || property.type !== 'Identifier' || property.name !== 'bindAll') {
                    return;
                }

                // check arguments count
                if (node.arguments.length < 2) {
                    context.report(node, 'Methods names missed.');
                }

                // method names should be strings
                node.arguments.slice(1).forEach(function(argObj) {
                    if (argObj.type !== 'Literal') {
                        context.report(node, 'Invalid method name parameter (only strings allowed).');
                    }
                });
            },
        };
    },
};
