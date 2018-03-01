require = require('@std/esm')(module);
require("@babel/register");
module.exports = require('./src/index.mjs').default;
