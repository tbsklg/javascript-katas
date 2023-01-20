const chai = require('chai')
const expect = chai.expect
const solution = require('../../src/string_ends_with/stringEndsWith')

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(solution('abcde', 'cde'), true)
    Test.assertEquals(solution('abcde', 'abc'), false)
  });
});
