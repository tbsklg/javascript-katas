const chai = require('chai');

const assert = chai.assert;
chai.config.truncateThreshold = 0;

const problem = require('../../src/problem/problem');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(problem('hello'), 'Error');
    assert.strictEqual(problem(1), 56);
    assert.strictEqual(problem(5), 256);
    assert.strictEqual(problem(0), 6);
    assert.strictEqual(problem(1.2), 66);
    assert.strictEqual(problem(3), 156);
    assert.strictEqual(problem('RyanIsCool'), 'Error');
    assert.strictEqual(problem(-3), -144);
    assert.strictEqual(problem(''), 'Error');
    assert.strictEqual(problem(0.03), 7.5);
  });
});
