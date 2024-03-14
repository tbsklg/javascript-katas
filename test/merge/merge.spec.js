const { assert } = require('chai')
const merge = require('../../src/merge/merge')

describe('merge', () => {
  it('should merge two empty arrays', () => {
    assert.deepEqual(merge([], []), [])
  })

  it('should merge left when right is empyt', () => {
    assert.deepEqual(merge([1, 2], []), [1, 2])
  })

  it('should merge right when left is empyt', () => {
    assert.deepEqual(merge([], [1, 2]), [1, 2])
  })

  it('should merge two sorted arrays', () => {
    assert.deepEqual(merge([1], [2, 3]), [1, 2, 3])
    assert.deepEqual(merge([1, 1, 1], [2, 2, 2]), [1, 1, 1, 2, 2, 2])
    assert.deepEqual(merge([1, 2, 3], [4]), [1, 2, 3, 4])
    assert.deepEqual(merge([1], [1]), [1, 1])
  })
})
