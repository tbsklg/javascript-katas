const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

const count = require('../../src/count/count')

describe('Tests', () => {
  it('should pass sample tests', () => {
    assert.deepEqual(count('aba'), { a: 2, b: 1 })
    assert.deepEqual(count(''), {})
  })
})
