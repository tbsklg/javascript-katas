const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const uefaEuro2016 = require('../../src/uefa_euro_2016/uefaEuro2016');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(
      uefaEuro2016(['Germany', 'Ukraine'], [2, 0]),
      'At match Germany - Ukraine, Germany won!',
    );
    assert.strictEqual(
      uefaEuro2016(['Belgium', 'Italy'], [0, 2]),
      'At match Belgium - Italy, Italy won!',
    );
    assert.strictEqual(
      uefaEuro2016(['Portugal', 'Iceland'], [1, 1]),
      'At match Portugal - Iceland, teams played draw.',
    );
  });
});
