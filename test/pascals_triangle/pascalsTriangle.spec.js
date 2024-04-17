const Test = {
  assertDeepEquals: (a, b) => require('chai').assert.deepEqual(a, b)
}

const pascal = require('../../src/pascals_triangle/pascalsTriangle.js')

describe('Tests', () => {
  it('test', () => {
    Test.assertDeepEquals(pascal(1), [[1]])
    Test.assertDeepEquals(pascal(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
  })
})
