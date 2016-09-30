/**
 * @fileoverview Rule to flag when we use incorrect signature for module definition
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function(context) {
    'use strict';

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
};
