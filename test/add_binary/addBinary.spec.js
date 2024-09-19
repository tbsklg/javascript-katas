const chai = require('chai');
const expect = chai.expect;

const Test = {
  expect: (actual, expected) => expect(actual).to.equal(expected),
  assertEquals: (actual, expected) => expect(actual).to.equal(expected),
};

const addBinary = require('../../src/add_binary/addBinary');

describe('addBinary(1,2)', function () {
  var results1 = addBinary(1, 2);
  it('Should return "11"', function () {
    Test.assertEquals(results1, '11');
  });
});
