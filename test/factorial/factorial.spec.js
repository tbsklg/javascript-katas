const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const factorial = require('../../src/factorial/factorial')

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(factorial(0), 1, 'factorial for 0 is 1')
    Test.assertEquals(factorial(1), 1, 'factorial for 1 is 1')
    Test.assertEquals(factorial(2), 2, 'factorial for 2 is 2')
    Test.assertEquals(factorial(3), 6, 'factorial for 3 is 6')
  })
})
