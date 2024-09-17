const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const streetFighterSelection = require('../../src/street_fighter_selection/streetFighterSelection');

let moves = [];
let fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

describe('Testing...', function () {
  it('should work with few moves', function () {
    moves = ['up', 'left', 'right', 'left', 'left'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Vega',
      'Ryu',
      'Vega',
      'Balrog',
    ]);
  });

  it('should work with no selection cursor moves', function () {
    moves = [];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), []);
  });

  it('should work when always moving left', function () {
    moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Vega',
      'Balrog',
      'Guile',
      'Blanka',
      'E.Honda',
      'Ryu',
      'Vega',
      'Balrog',
    ]);
  });

  it('should work when always moving right', function () {
    moves = [
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
    ];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'E.Honda',
      'Blanka',
      'Guile',
      'Balrog',
      'Vega',
      'Ryu',
      'E.Honda',
      'Blanka',
    ]);
  });

  it('should use all 4 directions clockwise twice', function () {
    moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken',
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken',
    ]);
  });

  it('should work when always moving down', function () {
    moves = ['down', 'down', 'down', 'down'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ken',
      'Ken',
      'Ken',
      'Ken',
    ]);
  });

  it('should work when always moving up', function () {
    moves = ['up', 'up', 'up', 'up'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Ryu',
      'Ryu',
      'Ryu',
    ]);
  });
});
