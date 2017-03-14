// calculator should take in object and then call the necessary functions


const { assert: { equal, include, isFunction } } = require('chai')
const calc = require('../lib/calculator')

describe('calculator', () => {
  it('should check if operation has a valid operator', () => {
    include('+-*/', calc.testObj.operator)
  })

  it('should run the add function if operator is "+"', () => {
    console.log(calc.add)
    isFunction(calc.add, "is calc.add a function or not?")
  })

  // it('should run the subtract function if operator is "-"', () => {

  // })

  // it('should run the multiply function if operator is "*"', () => {

  // })

  // it('should run the divide function if operator is "/"', () => {

  // })

})
