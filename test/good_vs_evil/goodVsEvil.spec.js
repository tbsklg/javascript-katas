const { assert } = require('chai');
const goodVsEvil = require('../../src/goods_vs_evil/goodsVsEvil.js');

describe('Sample tests', () => {
  it('Tests', () => {
    assert.equal(
      goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'),
      'Battle Result: Evil eradicates all trace of Good',
    );
    assert.equal(
      goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'),
      'Battle Result: Good triumphs over Evil',
    );
    assert.equal(
      goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'),
      'Battle Result: No victor on this battle field',
    );
  });
});
