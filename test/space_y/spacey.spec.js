const chai = require('chai');
const assert = chai.assert;

chai.config.truncateThreshold = 0;

const spacey = require('../../src/spacey/space_y');

describe('Fixed Tests', () => {
  it('["kevin","has","no","space"]', () => {
    assert.deepEqual(spacey(['kevin', 'has', 'no', 'space']), [
      'kevin',
      'kevinhas',
      'kevinhasno',
      'kevinhasnospace',
    ]);
  });

  it('["this","cheese","has","no","holes"]', () => {
    assert.deepEqual(spacey(['this', 'cheese', 'has', 'no', 'holes']), [
      'this',
      'thischeese',
      'thischeesehas',
      'thischeesehasno',
      'thischeesehasnoholes',
    ]);
  });
});
