const chai = require('chai');
const assert = chai.assert;

const Test = {
  assertEquals: assert.strictEqual,
};

const findMissingLetter = require('../../src/missing_letter/findMissingLetter');

describe('KataTests', function () {
  it('exampleTests', function () {
    Test.assertEquals(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
    Test.assertEquals(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
  });
});
