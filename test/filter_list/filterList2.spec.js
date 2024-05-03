const assert = require('chai').assert

const filterList2 = require('../../src/filter_list/filterList2')

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(
      filterList2([1, 2, 'a', 'b']),
      [1, 2],
      'For input [1,2,"a","b"]',
    )
    assert.deepEqual(
      filterList2([1, 'a', 'b', 0, 15]),
      [1, 0, 15],
      'For input [1,"a","b",0,15]',
    )
    assert.deepEqual(
      filterList2([1, 2, 'aasf', '1', '123', 123]),
      [1, 2, 123],
      'For input [1,2,"aasf","1","123",123]',
    )
  })
})
