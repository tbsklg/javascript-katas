const { assert } = require('chai');

const expandedForm = require('../../src/expanded_form/expandedForm');

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(expandedForm(12), '10 + 2');
    assert.strictEqual(expandedForm(42), '40 + 2');
    assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
  });
});
