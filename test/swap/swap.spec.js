const { assert } = require('chai');

const swap = require('../../src/swap/swap');

describe('Fixed tests', function () {
  it('testing for "Hello World!", 11', function () {
    assert.strictEqual(swap('Hello world!', 11), 'heLLO wORLd!');
  });
  it('testing for "the quick broWn fox leapt over the fence", 9', function () {
    assert.strictEqual(
      swap('the quick broWn fox leapt over the fence', 9),
      'The QUicK BrowN foX LeaPT ovER thE FenCE',
    );
  });
  it('testing for "eVerybody likes ice cReam", 85', function () {
    assert.strictEqual(
      swap('eVerybody likes ice cReam', 85),
      'EVErYbODy LiKeS IcE creAM',
    );
  });
  it('testing for "gOOd MOrniNg", 7864', function () {
    assert.strictEqual(swap('gOOd MOrniNg', 7864), 'GooD MorNIng');
  });
  it('testing for "how are you today?", 12345', function () {
    assert.strictEqual(swap('how are you today?', 12345), 'HOw are yoU TOdaY?');
  });

  it('edge cases n = 0', function () {
    assert.strictEqual(
      swap('the lord of the rings', 0),
      'the lord of the rings',
    );
  });
  it('edge cases s is empty', function () {
    assert.strictEqual(swap('', 11345), '');
  });
});
