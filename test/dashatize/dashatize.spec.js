const { assert } = require('chai')

const dashatize = require('../../src/dashatize/dashatize')

const doTest = (num, expected) => {
  const actual = dashatize(num)
  assert.strictEqual(actual, expected, `Testing for num = ${num}`)
}

describe('Dashatize it', () => {
  describe('Sample Tests', () => {
    it('Basic', () => {
      doTest(274, '2-7-4')
      doTest(5311, '5-3-1-1')
      doTest(86320, '86-3-20')
      doTest(974302, '9-7-4-3-02')
    })

    it('Weird', () => {
      doTest(0, '0')
      doTest(-1, '1')
      doTest(-28369, '28-3-6-9')
    })
  })
})
