'use strict';

const parseArgs = require('./parse-args')
const calc = require('./calculator')

const { argv: [,, ...args] } = process
const calcObj = parseArgs(args)
console.log(calc(calcObj))



// const cli = {

//   args: [1, '+', 1]

// }

// module.exports = cli
