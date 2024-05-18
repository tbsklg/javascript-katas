const { assert } = require('chai');

const solution = require('../../src/split_strings/splitStrings');

describe('Split Strings', () => {
  it('Basic tests', () => {
    assert.deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
    assert.deepEqual(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
    assert.deepEqual(solution(''), []);
  });
});
