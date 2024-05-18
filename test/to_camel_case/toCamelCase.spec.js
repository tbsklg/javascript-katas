const { assert } = require('chai');

const toCamelCase = require('../../src/to_camel_case/toCamelCase');

describe('Tests', () => {
  it('test', () => {
    // assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
    assert.strictEqual(
      toCamelCase('the_stealth_warrior'),
      'theStealthWarrior',
      "toCamelCase('the_stealth_warrior') did not return correct value",
    );
    assert.strictEqual(
      toCamelCase('The-Stealth-Warrior'),
      'TheStealthWarrior',
      "toCamelCase('The-Stealth-Warrior') did not return correct value",
    );
    assert.strictEqual(
      toCamelCase('A-B-C'),
      'ABC',
      "toCamelCase('A-B-C') did not return correct value",
    );
  });
});
