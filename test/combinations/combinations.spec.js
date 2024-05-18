const chai = require('chai');
const expect = chai.expect;

const solve = require('../../src/combinations/combinations');

const Test = {
  assertEquals(actual, expected) {
    expect(actual).to.equal(expected);
  },
};

describe('Basic tests', function () {
  it('should calculate array combinations', () => {
    Test.assertEquals(solve([[1, 2], [4], [5, 6]]), 4);
    Test.assertEquals(
      solve([
        [1, 2],
        [4, 4],
        [5, 6, 6],
      ]),
      4,
    );
    Test.assertEquals(
      solve([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
      8,
    );
    Test.assertEquals(
      solve([
        [1, 2, 3],
        [3, 4, 6, 6, 7],
        [8, 9, 10, 12, 5, 6],
      ]),
      72,
    );
  });
});
