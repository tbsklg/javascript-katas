const chai = require('chai')
const expect = chai.expect

const Test = {
  assertDeepEquals (actual, expected) {
    expect(actual).to.deep.equal(expected)
  }
}

const take = require('../../src/take/take')

describe('Sample Tests', function () {
  it('should work for sample tests', function () {
    Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], 'should return the first 3 items')
  })
})
