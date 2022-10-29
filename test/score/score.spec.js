const chai = require('chai')
const expect = chai.expect

const Test = {
  expect (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const score = require('../../src/score/score')

describe('Scorer Function', function () {
  it('should value this as worthless', function () {
    Test.expect(score([2, 3, 4, 6, 2]), 0)
  })

  it('should value this triplet correctly', function () {
    Test.expect(score([4, 4, 4, 3, 3]), 400)
  })

  it('should value this mixed set correctly', function () {
    Test.expect(score([2, 4, 4, 5, 4]), 450)
  })
})
