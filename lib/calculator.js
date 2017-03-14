'use strict';

const addOperation = require('./add')

const exportTest = {
  testObj:  {
    num1: 1,
    num2: 1,
    operator: '+'
  },
  add: addOperation
}

module.exports = exportTest
