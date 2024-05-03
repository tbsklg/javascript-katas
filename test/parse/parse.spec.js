const chai = require('chai')
const expect = chai.expect

const Test = {
  assertDeepEquals(actual, expected) {
    expect(actual).to.deep.equal(expected)
  },
}

const parse = require('../../src/parse/parse')

describe('Tests', () => {
  it('test', () => {
    Test.assertDeepEquals(parse('iiisdoso'), [8, 64])
    Test.assertDeepEquals(parse('iiisxxxdoso'), [8, 64])
  })
})
