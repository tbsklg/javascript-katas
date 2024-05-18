const { assert } = require('chai');

const { encode, decode } = require('../../src/vowel_code/vowelCode');

describe('Sample tests', function () {
  it('Tests', function () {
    assert.equal(encode('hello'), 'h2ll4');
    assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
    assert.equal(
      encode('This is an encoding test.'),
      'Th3s 3s 1n 2nc4d3ng t2st.',
    );
    assert.equal(decode('h2ll4'), 'hello');
  });
});
