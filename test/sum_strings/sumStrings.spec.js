const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const sumStrings = require('../../src/sum_strings/sumStrings')

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(sumStrings('123','456'),'579')
    Test.assertEquals(sumStrings('','456'),'456')
    Test.assertEquals(sumStrings('00103', '08567'),'8670')
  });
});
