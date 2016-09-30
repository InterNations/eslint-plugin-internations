/**
 * @fileoverview Rule to flag when a test file is using the fit method
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

            if (obj.name === 'fit') {
                context.report(node, 'tests using fit are not allowed');
            }
        }
    };
};
