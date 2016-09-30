/**
 * @fileoverview Rule to flag when a ViewComponent#create is called with deprecated syntax
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function(context) {
    'use strict';

    return {
        CallExpression: function(node) {

            if (node.callee.type !== 'MemberExpression') {
                return;
            }

            // check callee object
            var obj = node.callee.object;
            if (!obj || obj.type !== 'Identifier' || obj.name !== 'ViewComponent') {
                return;
            }

            // check callee name
            var property = node.callee.property;
            if (!property || property.type !== 'Identifier' || property.name !== 'create') {
                return;
            }

            // check arguments count
            if (node.arguments.length > 2) {
                context.report(node, 'Object syntax should be used');
            }
        }
    };
};
