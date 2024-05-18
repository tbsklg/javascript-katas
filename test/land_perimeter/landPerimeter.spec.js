const Test = {
  assertEquals: require('chai').assert.equal,
};

const landPerimeter = require('../../src/land_perimeter/landPerimeter');

describe('Testing', function () {
  it('Basic testing', () => {
    Test.assertEquals(
      landPerimeter([
        'OXOOOX',
        'OXOXOO',
        'XXOOOX',
        'OXXXOO',
        'OOXOOX',
        'OXOOOO',
        'OOXOOX',
        'OOXOOO',
        'OXOOOO',
        'OXOOXX',
      ]),
      'Total land perimeter: 60',
    );
    Test.assertEquals(
      landPerimeter([
        'OXOOO',
        'OOXXX',
        'OXXOO',
        'XOOOO',
        'XOOOO',
        'XXXOO',
        'XOXOO',
        'OOOXO',
        'OXOOX',
        'XOOOO',
        'OOOXO',
      ]),
      'Total land perimeter: 52',
    );
    Test.assertEquals(
      landPerimeter([
        'XXXXXOOO',
        'OOXOOOOO',
        'OOOOOOXO',
        'XXXOOOXO',
        'OXOXXOOX',
      ]),
      'Total land perimeter: 40',
    );
    Test.assertEquals(
      landPerimeter([
        'XOOOXOO',
        'OXOOOOO',
        'XOXOXOO',
        'OXOXXOO',
        'OOOOOXX',
        'OOOXOXX',
        'XXXXOXO',
      ]),
      'Total land perimeter: 54',
    );
    Test.assertEquals(
      landPerimeter([
        'OOOOXO',
        'XOXOOX',
        'XXOXOX',
        'XOXOOO',
        'OOOOOO',
        'OOOXOO',
        'OOXXOO',
      ]),
      'Total land perimeter: 40',
    );
  });
});
