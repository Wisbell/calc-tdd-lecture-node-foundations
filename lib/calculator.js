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



module.exports = ({ operation, num1, num2 }) => {
  switch (operation) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case 'x': return multiply(num1, num2);
    case '/': return divide(num1, num2);
  }
}
