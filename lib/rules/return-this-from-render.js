/**
 * @fileoverview
 * Rule to flag when any view render function returns this
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
            Property(node) {
                if (node.key.name !== 'render') {
                    return;
                }

                const renderFunc = node.value;

                if (renderFunc.type !== 'FunctionExpression') {
                    return;
                }

                let foundReturn = false;
                renderFunc.body.body.forEach(function(thing) {
                    if (thing.type !== 'ReturnStatement') {
                        return;
                    }

                    foundReturn = true;

                    if (thing.argument.type !== 'ThisExpression') {
                        context.report(node, 'Wrong return type.  Must return `this`.');
                    }
                });

                if (!foundReturn) {
                    context.report(node, 'Return missing.  Must return `this`.');
                }
            },
        };
    },
};
