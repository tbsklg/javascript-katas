const chai = require('chai')

const Test = {
  assertSimilar(actual, expected) {
    chai.expect(actual).to.include.members(expected)
  },
}

const cutFruits = require('../../src/cut_fruits/cutFruits')

describe('Tests', () => {
  it('test', () => {
    Test.assertSimilar(cutFruits(['apple', 'pear', 'banana']), [
      'app',
      'le',
      'pe',
      'ar',
      'ban',
      'ana',
    ])
    Test.assertSimilar(cutFruits(['apple', 'pear', 'banana', 'bomb']), [
      'app',
      'le',
      'pe',
      'ar',
      'ban',
      'ana',
      'bomb',
    ])
  })
})
