const chai = require('chai');

const assert = chai.assert;
chai.config.truncateThreshold = 0;

const hamming = require('../../src/hamming/hamming');

describe('Fixed Tests', () => {
  it('Tests', () => {
    assert.strictEqual(hamming('I like turtles', 'I like turkeys'), 3);
    assert.strictEqual(hamming('Hello World', 'Hello World'), 0);
    assert.strictEqual(hamming('hello world', 'hello tokyo'), 4);
    assert.strictEqual(
      hamming('a man a plan a canal', 'a man a plan sobanal'),
      3,
    );
    assert.strictEqual(hamming('hamming and cheese', 'Hamming and Cheese'), 2);
    assert.strictEqual(hamming('espresso', 'Expresso'), 2);
    assert.strictEqual(
      hamming('old father, old artificer', 'of my soul the uncreated '),
      24,
    );
  });
});
