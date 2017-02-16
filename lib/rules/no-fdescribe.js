/**
 * @fileoverview Rule to flag when a test file is using the fdescribe method
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
                if (!obj || obj.type !== 'Identifier') {
                    return;
                }

                if (obj.name === 'fdescribe') {
                    context.report(node, 'tests using fdescribe are not allowed');
                }
            }
        };
    }
};
