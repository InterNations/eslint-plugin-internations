/**
 * @fileoverview
 * Rule to flag when a test file is using undeclared router path
 */

const fs = require('fs');
const lodash = require('lodash');

const esprima = require('esprima');
const walk = require('esprima-walk');

/**
 * Get routes configuration from router.js
 *
 * // read definition of
 * Router.routes = {...};
 */
function getRoutesConfig(routerFile) {
    let content = '';

    try {
        content = fs.readFileSync(routerFile, { encoding: 'utf8' });
    } catch (e) {
        /* eslint-disable no-console */
        console.error('Rule internations/routes: Router file not found. Make sure the filepath is correct.');
        console.error('The filepath given was:', routerFile);
        /* eslint-enable no-console */
        return null;
    }

    const ast = esprima.parse(content, { sourceType: 'module' });
    const config = {};

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
            // eslint-disable-next-line no-console
            console.error('Router.routes is not an object!');
            return;
        }

        node.right.properties.forEach(function(property) {
            config[property.key.name] = property.value.value;
        });
    });

    return config;
}

const getRoutesConfigMemoized = lodash.memoize(getRoutesConfig);
function getRoutesFromContext(context) {
    if (!context.settings || !context.settings.internations || !context.settings.internations.routes) {
        // eslint-disable-next-line no-console
        console.error(
            '`internations.routes` setting not found in `settings`. Make sure your eslint config file contains the `settings.internations.routes` key with a valid filepath' // eslint-disable-line max-len
        );
        return null;
    }

    const routerPath = context.settings.internations.routes;
    const routes = getRoutesConfigMemoized(routerPath);

    return routes;
}


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
    meta: {
        docs: {},
    },

    create(context) {
        const routes = getRoutesFromContext(context);

        if (!routes) {
            return;
        }

        return {
            CallExpression(node) {
                // check callee object
                const callee = node.callee;

                if (callee.type !== 'MemberExpression') {
                    return;
                }

                const object = callee.object;
                const property = callee.property;

                if (object.name !== 'Router' || property.name !== 'path') {
                    return;
                }

                const firstArgument = node.arguments[0];

                if (firstArgument.type !== 'Literal') {
                    context.report(node, 'First argument to Router.path() should be a string.');
                    return;
                }

                const value = firstArgument.value;
                if (!routes[value]) {
                    context.report(node, 'Route "' + value + '" was not defined in config.');
                    return;
                }
            },
        };
    },
};
