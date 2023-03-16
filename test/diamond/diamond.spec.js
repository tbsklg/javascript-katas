const { assert } = require('chai')

const diamond = require('../../src/diamond/diamond')

describe('diamond()', function () {
  it('Valid diamonds', () => {
    assert.strictEqual(diamond(1), '*\n')
    assert.strictEqual(diamond(3), ' *\n***\n *\n')
    assert.strictEqual(diamond(5), '  *\n ***\n*****\n ***\n  *\n')
  })

  it('Invalid diamonds', () => {
    assert.strictEqual(diamond(2), null)
    assert.strictEqual(diamond(-3), null)
    assert.strictEqual(diamond(0), null)
  })
})
