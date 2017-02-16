/**
 * @fileoverview Rule to flag when we use incorrect signature for module definition
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
    meta: {
        docs: {}
    },

    create: function(context) {

        return {
            CallExpression: function(node) {

                // check callee object
                var obj = node.callee;
                if (!obj || obj.type !== 'Identifier' || obj.name !== 'define') {
                    return;
                }

                // signature with only one argument [function] is correct
                if (node.arguments.length !== 1) {
                    context.report(node, 'Incorrect signature for module definition');
                }
            }
        };
    }
};
