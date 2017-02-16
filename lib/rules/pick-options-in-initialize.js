/**
 * @fileoverview Rule to flag when trying to assign this.options using pickOptions, outside of an initialize method
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
                if (node.left.type === 'MemberExpression' &&
                    node.left.object.type === 'ThisExpression' &&
                    node.left.property.name === 'options' &&
                    node.right.type === 'CallExpression' &&
                    node.right.callee.object &&
                    node.right.callee.object.type === 'ThisExpression' &&
                    node.right.callee.object.property &&
                    node.right.callee.property.name === 'pickOptions' &&
                    node.parent.parent.parent.id.name === 'initialize') {
                    context.report(node, 'pickOptions must be used within the initialize method');
                }
            }
        };
    }
};
