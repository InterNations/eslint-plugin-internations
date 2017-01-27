/**
 * @fileoverview Rule to flag when trying to import underscore,
 * which is now deprecated in favor of lodash
 */
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var MESSAGE = 'underscore is deprecated, use lodash instead';

module.exports = function(context) {
    return {
        ImportDeclaration(node) {
            if (node.source.value === 'underscore') {
                context.report(node.source, MESSAGE);
            }
        },
        CallExpression(node) {
            if (node.callee.name !== 'require') return;
            if (node.arguments.length < 1) return;
            if (node.arguments[0].value !== 'underscore') return;

            context.report(node.arguments[0], MESSAGE);
        }
    };
};
