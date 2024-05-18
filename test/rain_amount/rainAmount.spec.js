const chai = require('chai');
const expect = chai.expect;

const Test = {
  assertEquals(actual, expected) {
    expect(actual).to.equal(expected);
  },
};

const rainAmount = require('../../src/rain_amount/rainAmount');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(
      rainAmount(100),
      'Your plant has had more than enough water for today!',
    );
    Test.assertEquals(
      rainAmount(39),
      'You need to give your plant 1mm of water',
    );
  });
});
