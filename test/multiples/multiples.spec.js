const { assert } = require('chai')

const solution = require('../../src/multiples/multiples')

function test (n, expected) {
  it(`n=${n}`, () => {
    const actual = solution(n)
    assert.strictEqual(actual, expected)
  })
}

describe('basic tests', function () {
  test(10, 23)
})
