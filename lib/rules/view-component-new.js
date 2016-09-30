/**
 * @fileoverview
 * Rule to flag when a ViewComponent is going to be created not with ViewComponent.create
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function(context) {
    'use strict';

    var components = {};

    return {
        /**
         * Find view component requires (by containing view_component folder)
         * and save them into components for quick check
         */
        VariableDeclarator: function(node) {
            if (!node.init) {
                return;
            }

            if (node.init.type !== 'CallExpression') {
                return;
            }

            if (node.init.callee.name !== 'require') {
                return;
            }

            if (node.init.callee.type !== 'Identifier') {
                return;
            }

            var arg = node.init.arguments[0];
            if (!arg || arg.type !== 'Literal') {
                return;
            }
            var viewComponentRegexp = /view_component\/([\w]+)$/;
            var match = arg.value.match(viewComponentRegexp);

            if (!match || !match[1]) {
                return;
            }

            var componentName = match[1];

            // remove base component from matches
            if (componentName === 'view_component') {
                return;
            }

            components[node.id.name] = componentName;
        },

        /**
         * Check if Constructor we are going to instantiate is a previously found
         * view component variable
         */
        NewExpression: function(node) {
            var name = node.callee.name;

            if (components[name]) {
                context.report(
                    node,
                    'ViewComponent should be created using `ViewComponent.create()`'
                );
            }
        }
    };
};
