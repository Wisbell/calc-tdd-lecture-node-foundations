const { assert: { deepEqual, isObject } } = require('chai')
const parseArgs = require('../lib/parse-args')

describe('parseArgs', () => {
  it('Should return an object', () => {
    isObject(parseArgs())
  })

  it('should return 3 properties: num1, num2, operation', () => {
    deepEqual({num1: '', num2: '', operation: ''}, parseArgs())
  })

})
