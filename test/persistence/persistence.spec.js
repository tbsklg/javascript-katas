const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const persistence = require('../../src/persistence/persistence');

describe('Persistent Bugger.', () => {
  it('Fixed tests', () => {
    // assert.strictEqual(persistence(39),3);
    // assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25), 2);
    assert.strictEqual(persistence(999), 4);
  });
});
