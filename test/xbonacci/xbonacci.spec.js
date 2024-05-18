const chai = require('chai');

const Test = {
  assertSimilar(actual, expected) {
    chai.expect(actual).to.include.members(expected);
  },
};

const Xbonacci = require('../../src/xbonacci/xbonacci');

describe('Basic tests', function () {
  Test.assertSimilar(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  Test.assertSimilar(Xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  Test.assertSimilar(
    Xbonacci([0, 0, 0, 0, 1], 10),
    [0, 0, 0, 0, 1, 1, 2, 4, 8, 16],
  );
  Test.assertSimilar(
    Xbonacci([1, 0, 0, 0, 0, 0, 1], 10),
    [1, 0, 0, 0, 0, 0, 1, 2, 3, 6],
  );
  Test.assertSimilar(
    Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20),
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256],
  );
});
