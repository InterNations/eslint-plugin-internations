/**
 * @fileoverview Custom InterNations ESLint rules
 * @author Vitor Balocco <vitorbal@gmail.com>
 */


//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Bootstrapping
//------------------------------------------------------------------------------

// import all rules in lib/rules
const rules = requireIndex(__dirname + '/rules');
const config = require('./recommended-rules');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
    rules,
    configs: {
        recommended: config,
    },
};
