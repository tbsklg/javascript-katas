const chai = require('chai');

const Test = {
  assertSimilar(actual, expected) {
    chai.expect(actual).to.equal(expected);
  },
};

const decode = require('../../src/digital_cypher/decode');

describe('Encoding..', function () {
  it('Basic Tests', function () {
    Test.assertSimilar(decode([20, 12, 18, 30, 21], 1939), 'scout');
    Test.assertSimilar(
      decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939),
      'masterpiece',
    );
  });
});
