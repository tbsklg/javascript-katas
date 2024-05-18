const chai = require('chai');
const assert = chai.assert;

const Test = {
  assertDeepEquals: (actual, expected) => assert.deepEqual(actual, expected),
};

const birdCode = require('../../src/bird_code/birdCode');

describe('Tests', () => {
  it('test', () => {
    Test.assertDeepEquals(birdCode(['Common Tern', 'Black-Capped Chickadee']), [
      'COTE',
      'BCCH',
    ]);
  });
});
