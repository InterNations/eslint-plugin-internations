/**
 * @fileoverview Rule to flag when a test file is using undeclared router path
 */

'use strict';

var path = require('path');
var fs = require('fs');

var esprima = require('esprima');
var walk = require('esprima-walk');

/**
 * Get routes configuration from router.js
 *
 * // read definition of
 * Router.routes = {...};
 */
function getRoutesConfig() {
    var routerFile = path.resolve('./app-new/src/InterNations/Bundle/LayoutBundle/Resources/public/frontend/js/service/router.js');
    var content = "";

    try {
        content = fs.readFileSync(routerFile, { encoding: 'utf8' });
    } catch(e) {}

    var ast = esprima.parse(content, { sourceType: 'module' });
    var config = {};

    walk(ast, function(node) {
        if (node.type !== 'AssignmentExpression') {
            return;
        }

        if (node.left.type !== 'MemberExpression') {
            return;
        }

        if (node.left.object.name !== 'Router' || node.left.property.name.indexOf('routes') === -1) {
            return;
        }

        if (node.right.type !== 'ObjectExpression') {
            console.error('Router.routes are not an object!');
            return;
        }

        node.right.properties.forEach(function(property) {
            config[property.key.name] = property.value.value;
        });
    });

    return config;
}

var routes = getRoutesConfig();

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function(context) {
    'use strict';

    if (!routes) {
        console.log('Skipping routes validation, parsing failed.');
        return;
    }

    return {
        CallExpression: function(node) {
            // check callee object
            var callee = node.callee;

            if (callee.type !== 'MemberExpression') {
                return;
            }

            var object = callee.object;
            var property = callee.property;

            if (object.name !== 'Router' || property.name !== 'path') {
                return;
            }

            var firstArgument = node.arguments[0];

            if (firstArgument.type !== 'Literal') {
                context.report(node, 'First argument to Router.path() should be a string.');
                return;
            }

            var value = firstArgument.value;
            if (!routes[value]) {
                context.report(node, 'Route "' + value + '" was not defined in config.');
                return;
            }
        }
    };
};
