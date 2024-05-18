const chai = require('chai');
const assert = chai.assert;

const Test = {
  assertSimilar: assert.deepEqual,
};

const mineLocation = require('../../src/mine_location/mineLocation');

describe('Tests', () => {
  it('test', () => {
    Test.assertSimilar(
      mineLocation([
        [1, 0],
        [0, 0],
      ]),
      [0, 0],
    );
    Test.assertSimilar(
      mineLocation([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]),
      [0, 0],
    );
    Test.assertSimilar(
      mineLocation([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ]),
      [2, 2],
    );
  });
});
