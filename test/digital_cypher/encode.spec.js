const chai = require('chai');

const Test = {
  assertSimilar(actual, expected) {
    chai.expect(actual).to.deep.equal(expected);
  },
};

const encode = require('../../src/digital_cypher/encode');

describe('Encoding..', function () {
  it('Basic Tests', function () {
    Test.assertSimilar(encode('scout', 1939), [20, 12, 18, 30, 21]);
    Test.assertSimilar(
      encode('masterpiece', 1939),
      [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],
    );
  });
});
