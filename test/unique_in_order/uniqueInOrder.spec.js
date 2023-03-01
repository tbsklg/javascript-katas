const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

const uniqueInOrder = require('../../src/unique_in_order/uniqueInOrder')

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
  })
})
