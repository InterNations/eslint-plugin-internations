/**
 * @fileoverview
 * Rule to flag when a test file is using the fdescribe method
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
    meta: {
        docs: {},
    },

    create(context) {

        return {
            CallExpression(node) {

                // check callee object
                const obj = node.callee;
                if (!obj || obj.type !== 'Identifier') {
                    return;
                }

                if (obj.name === 'fdescribe') {
                    context.report(node, 'tests using fdescribe are not allowed');
                }
            },
        };
    },
};
