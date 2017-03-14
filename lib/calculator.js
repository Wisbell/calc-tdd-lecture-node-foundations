'use strict';

const add = require('./add')
const subtract = require('./subtract')
const multiply = require('./multiply')
const divide = require('./divide')

// const exportTest = {
//   testObj:  {
//     num1: 1,
//     num2: 1,
//     operator: '*'
//   },
//   add: addOperation,
//   subtract: subtractOperation,
//   multiply: multiplyOperation,
//   divide: divideOperation
// }



module.exports = ({ operation, num1, num2}}) => {
  switch (operation) {
    case '+': add(num1, num2)
    case '*': subtract(num1, num2)
    case '*': multiply(num1, num2)
    case '/': divide(num1, num2)
  }
}
