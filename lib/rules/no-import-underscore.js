/**
 * @fileoverview Rule to flag when trying to import underscore,
 * which is now deprecated in favor of lodash
 */
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    return {
        ImportDeclaration(node) {
            if (node.source.value === 'underscore') {
                context.report(node.source, 'underscore is deprecated, use lodash instead');
            }
        }
    };
};
