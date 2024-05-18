const { assert } = require('chai');

const Test = {
  assertEquals: assert.strictEqual,
};

const minimumNumber = require('../../src/minimum_number/minimumNumber');

describe('Basic tests', () => {
  Test.assertEquals(minimumNumber([3, 1, 2]), 1);
  Test.assertEquals(minimumNumber([5, 2]), 0);
  Test.assertEquals(minimumNumber([1, 1, 1]), 0);
  Test.assertEquals(minimumNumber([2, 12, 8, 4, 6]), 5);
  Test.assertEquals(minimumNumber([50, 39, 49, 6, 17, 28]), 2);
});
