const assert = require('chai').assert

const remainder = require('../../src/remainder/remainder')

describe('Remainder Function', () => {
  it('Should handle arguments and math as defined in specificaitons', () => {
    assert.strictEqual(remainder(17, 5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5')
    assert.strictEqual(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter')
    assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN')
    assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN')
  })
})
