const { assert } = require('chai');

const cleanString = require('../../src/backspaces_in_string/backspacesInString');

describe('cleanString', () => {
  it('should work correctly', () => {
    assert.strictEqual(cleanString('abc#d##c'), 'ac');
    assert.strictEqual(cleanString('abc####d##c#'), '');
  });
});
