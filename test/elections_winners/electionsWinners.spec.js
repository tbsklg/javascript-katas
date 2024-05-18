const chai = require('chai');
const expect = chai.expect;

const Test = {
  assertEquals(actual, expected) {
    expect(actual).to.equal(expected);
  },
};

const electionsWinners = require('../../src/elections_winners/electionsWinners');

describe('Basic Tests', function () {
  it('It should works for basic tests.', function () {
    Test.assertEquals(electionsWinners([2, 3, 5, 2], 3), 2);
    Test.assertEquals(electionsWinners([1, 3, 3, 1, 1], 0), 0);
    Test.assertEquals(electionsWinners([5, 1, 3, 4, 1], 0), 1);
    Test.assertEquals(electionsWinners([1, 1, 1, 1], 1), 4);
    Test.assertEquals(electionsWinners([1, 1, 1, 1], 0), 0);
    Test.assertEquals(electionsWinners([3, 1, 1, 3, 1], 2), 2);
  });
});
