const chai = require('chai');

const Test = {
  assertEquals: (actual, expected) => chai.assert.equal(actual, expected),
};

const palindrome = require('../../src/palindrome/palindrome');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(palindrome(2), false);
    Test.assertEquals(palindrome(123322367), true);
    Test.assertEquals(palindrome(1551), true);
    Test.assertEquals(palindrome(1215), true);
    Test.assertEquals(palindrome(13598), false);
    Test.assertEquals(palindrome('ACCDDCCA'), 'Not valid');
    Test.assertEquals(palindrome('1551'), 'Not valid');
    Test.assertEquals(palindrome(-4505), 'Not valid');
  });
});
