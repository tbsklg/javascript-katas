const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

const isValidWalk = require('../src/isValidWalk/is_valid_walk')

describe('Tests', () => {
  it('test', () => {
    // some test cases for you...
    assert.isTrue(
      isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return true',
    )
    assert.isFalse(
      isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
      'should return false',
    )
    assert.isFalse(isValidWalk(['w']), 'should return false')
    assert.isFalse(
      isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return false',
    )
  })
})
