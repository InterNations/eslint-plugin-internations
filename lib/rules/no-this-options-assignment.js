/**
 * @fileoverview Rule to flag when trying to assign this.options.x
 'this.options.foo = bar' is not allowed, options should not be mutated from inside a view, options must remain the same
 from after a view is initialised
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
            AssignmentExpression(node) {
                if (node.left.object &&
                    node.left.object.type === 'MemberExpression' &&
                    node.left.object.object.type === 'ThisExpression' &&
                    node.left.object.property.name === 'options') {
                    context.report(node, 'this.options.x assignment not allowed');
                }
            }
        };
    }
};
