'use strict';

module.exports = (argsArray) => {
  let calcInfo = {}

  calcInfo.num1      = argsArray[0]
  calcInfo.num2      = argsArray[2]
  calcInfo.operation = argsArray[1]

  // calcInfo.num1      = ''
  // calcInfo.num2      = ''
  // calcInfo.operation = ''

  return calcInfo
}
