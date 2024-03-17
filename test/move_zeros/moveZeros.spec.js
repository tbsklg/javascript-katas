const { assert, config } = require('chai')
config.truncateThreshold = 0

const moveZeros = require('../../src/move_zeros/moveZeros.js')

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
  })
})
