const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const isPangram = require('../../src/is_pangram/isPangram');

describe('Tests', () => {
  it('test1', () => {
    const string = 'The quick brown fox jumps over the lazy dog.';
    assert.strictEqual(isPangram(string), true);
  });
  it('test2', () => {
    const string = 'This is not a pangram.';
    assert.strictEqual(isPangram(string), false);
  });
});
