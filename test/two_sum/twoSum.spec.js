const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

const twoSum = require('../../src/two_sum/twoSum')

describe('Sample Tests', function () {
  const testCases = [
    [[1, 2, 3], 4, [0, 2]],
    [[1234, 5678, 9012], 14690, [1, 2]],
    [[2, 2, 3], 4, [0, 1]],
    [[2, 3, 1], 4, [1, 2]],
  ]
  for (const [numbers, target, expected] of testCases) {
    it(`Testing for numbers = [${numbers.join(', ')}], target = ${target}`, () =>
      check(numbers, target, expected))
  }

  const numericalCompare = (a, b) => a - b
  function check(arr, target, expected) {
    const actual = twoSum(arr.slice(), target)
    assert.isArray(actual)
    assert.deepEqual(actual.sort(numericalCompare), expected)
  }
})
