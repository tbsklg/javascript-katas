const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const countAdjacentPairs = require('../../src/count_adjacent_pairs/countAdjacentPairs')

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(countAdjacentPairs(''), 0, 'An empty string should return 0.')
    Test.assertEquals(countAdjacentPairs('orange Orange kiwi pineapple apple'), 1, "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')")
    Test.assertEquals(countAdjacentPairs('banana banana banana'), 1, "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')")
    Test.assertEquals(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!'), 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')")
    Test.assertEquals(countAdjacentPairs('pineapple apple'), 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")
  })
})
