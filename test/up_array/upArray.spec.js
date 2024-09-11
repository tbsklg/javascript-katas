const { assert } = require('chai');

const upArray = require('../../src/up_array/upArray');

describe('Tests', () => {
  it('test', () => {
    assert.sameOrderedMembers(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
    assert.sameOrderedMembers(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
    assert.sameOrderedMembers(upArray([9, 9]), [1, 0, 0]);
    assert.sameOrderedMembers(upArray([0, 7]), [0, 8]);
    assert.sameOrderedMembers(
      upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    );

    assert.isNull(upArray([1, -9]));
    assert.isNull(upArray([1, 10]));
  });
});
