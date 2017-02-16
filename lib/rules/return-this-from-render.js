/**
 * @fileoverview Rule to flag when any view render function returns this
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
            Property: function(node) {
                if (node.key.name !== 'render') {
                    return;
                }

                var renderFunc = node.value;

                if (renderFunc.type !== 'FunctionExpression') {
                    return;
                }

                var foundReturn = false;
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
            }
        };
    }
};
