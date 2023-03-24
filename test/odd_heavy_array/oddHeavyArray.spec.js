const chai = require('chai')
const assert = chai.assert

const Test = {
  assertDeepEquals: assert.deepEqual
}

const isOddHeavy = require('../../src/odd_heavy_array/oddHeavy.js')

describe('Odd-heavy', () => {
  it('sample tests', () => {
    Test.assertDeepEquals(isOddHeavy([0, 2, 19, 4, 4]), true)
    Test.assertDeepEquals(isOddHeavy([1, -2, -1, 2]), false)
  })
})
