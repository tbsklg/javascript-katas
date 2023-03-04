const chai = require('chai')
const expect = chai.expect

const Test = {
  assertSimilar (actual, expected) {
    expect(actual).to.deep.equal(expected)
  }
}

const sortArray = require('../../src/sort_array/sortArray')

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 8, 4, 5, 2, 11])
    Test.assertSimilar(sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [22, 4, 1, 5, 2, 11, 37, 0])
    Test.assertSimilar(sortArray([1, 111, 11, 11, 2, 1, 5, 0]),[1, 1, 5, 11, 2, 11, 111, 0])
    Test.assertSimilar(sortArray([]),[])
  });
});
