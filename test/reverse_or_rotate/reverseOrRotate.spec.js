const chai = require('chai')
const assert = chai.assert

function testing(actual, expected) {
  assert.strictEqual(actual, expected)
}

const revrot = require('../../src/reverse_or_rotate/reverseOrRotate')

describe('revrot', function () {
  it('Basic tests', function () {
    testing(revrot('1234', 0), '')
    testing(revrot('', 0), '')
    testing(revrot('1234', 5), '')
    const s = '733049910872815764'
    testing(revrot(s, 5), '330479108928157')
  })
})
