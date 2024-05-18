const { assert, config } = require('chai');
config.truncateThreshold = 0;

const {
  start,
  end,
  add,
  sub,
  div,
  mul,
  push,
} = require('../../src/a_bubbly_programming_language/a-bubbly-programming-language');

describe('Bubbly', () => {
  it('description examples', () => {
    assert.strictEqual(start(push)(5)(push)(3)(add)(end), 8);
    assert.strictEqual(
      start(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(mul)(end),
      48,
    );
    assert.strictEqual(start(push)(4)(push)(9)(div)(end), 2);
    assert.strictEqual(start(push)(5)(push)(8)(push)(1)(add)(add)(end), 14);
  });
  it('more examples', () => {
    assert.strictEqual(start(push)(3)(push)(5)(sub)(end), 2);
    assert.strictEqual(start(push)(8)(push)(9)(push)(3)(mul)(mul)(end), 216);
    assert.strictEqual(start(push)(1)(push)(1)(add)(push)(2)(add)(end), 4);
  });
});
