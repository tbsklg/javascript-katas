const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const titleCase = require('../../src/title_case/titleCase')

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(titleCase(''), '')
    Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
    Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
    Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
  })
})
