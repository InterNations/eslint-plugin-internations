/**
 * @fileoverview Rule to flag when underscore bind is used over Function.prototype.bind
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function(context) {
    'use strict';

    return {
        CallExpression: function(node) {

            // check callee object
            var obj = node.callee.object;
            var property = node.callee.property;
            if (!obj || obj.type !== 'Identifier') {
                return;
            }

            if (obj.name === '_' && property.name === 'bind') {
                context.report(node, 'prefer Function.prototype.bind over _.bind');
            }
        }
    };
};
