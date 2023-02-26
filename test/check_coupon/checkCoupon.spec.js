const { assert } = require('chai')

const checkCoupon = require('../../src/check_coupon/checkCoupon')

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true)
    assert.strictEqual(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false)
  })
})
