/**
 * @fileoverview Rule to flag any ViewComponent usage, as ViewComponents are deprecated.
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
            ImportDeclaration: function(node) {
                if (node.source.type === 'Literal' &&
                    node.source.value === 'view_component/view_component') {
                    context.report(node.source, 'ViewComponents are deprecated. Please use regular Views instead.');
                }
            }
        };
    }
};
