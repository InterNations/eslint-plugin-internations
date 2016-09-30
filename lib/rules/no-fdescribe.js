/**
 * @fileoverview Rule to flag when a test file is using the fdescribe method
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
            if (!obj || obj.type !== 'Identifier') {
                return;
            }

            if (obj.name === 'fdescribe') {
                context.report(node, 'tests using fdescribe are not allowed');
            }
        }
    };
};
