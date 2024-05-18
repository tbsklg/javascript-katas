const { assert } = require('chai');

const generateHashtag = require('../../src/generate_hashtag/generate-hashtag');

describe('Tests', () => {
  it('Sample tests', () => {
    assert.strictEqual(
      generateHashtag(''),
      false,
      'Expected an empty string to return false',
    );
    assert.strictEqual(
      generateHashtag(' '.repeat(200)),
      false,
      'Still an empty string',
    );
    assert.strictEqual(
      generateHashtag('Do We have A Hashtag'),
      '#DoWeHaveAHashtag',
      'Expected a Hashtag (#) at the beginning.',
    );
    assert.strictEqual(
      generateHashtag('Codewars'),
      '#Codewars',
      'Should handle a single word.',
    );
    assert.strictEqual(
      generateHashtag('Codewars Is Nice'),
      '#CodewarsIsNice',
      'Should remove spaces.',
    );
    assert.strictEqual(
      generateHashtag('Codewars is nice'),
      '#CodewarsIsNice',
      'Should capitalize first letters of words.',
    );
    assert.strictEqual(
      generateHashtag('code' + ' '.repeat(140) + 'wars'),
      '#CodeWars',
    );
    assert.strictEqual(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',
      ),
      false,
      'Should return false if the final word is longer than 140 chars.',
    );
    assert.strictEqual(
      generateHashtag('a'.repeat(139)),
      '#A' + 'a'.repeat(138),
      'Should work',
    );
    assert.strictEqual(generateHashtag('a'.repeat(140)), false, 'Too long');
  });
});
