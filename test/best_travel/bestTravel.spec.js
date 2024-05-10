const Test = {
  assertEquals: require('chai').assert.equal,
}

const chooseBestSum = require('../../src/best_travel/bestTravel')

describe('chooseBestSum', function () {
  it('Basic tests ', function () {
    var ts = [50, 55, 56, 57, 58]
    Test.assertEquals(chooseBestSum(163, 3, ts), 163)
    ts = [50]
    Test.assertEquals(chooseBestSum(163, 3, ts), null)
    ts = [91, 74, 73, 85, 73, 81, 87]
    Test.assertEquals(chooseBestSum(230, 3, ts), 228)
  })
})
