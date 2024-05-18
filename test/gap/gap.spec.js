const chai = require('chai');
const assert = chai.assert;

const gap = require('../../src/gap/gap');

describe('Gap', function () {
  it('Basic tests', function () {
    assert.deepEqual(gap(2, 100, 110), [101, 103]);
    assert.deepEqual(gap(4, 100, 110), [103, 107]);
    assert.deepEqual(gap(6, 100, 110), null);
    assert.deepEqual(gap(8, 300, 400), [359, 367]);
    assert.deepEqual(gap(10, 300, 400), [337, 347]);
  });
});
