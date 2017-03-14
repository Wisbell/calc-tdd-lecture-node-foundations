const { assert: { isNumber, equal } } = require('chai')
const add = require('../lib/add')

describe('add', () => {
  it('should return a number', () => {
    isNumber(add(3, 3))
  })

  it('should return a sum of two numbers', () => {
    equal(4, add(2, 2))
  })
})
