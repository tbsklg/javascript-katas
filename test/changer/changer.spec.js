const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

const changer = require('../../src/changer/changer')

describe('Change it up', () => {
  it('Sample tests', () => {
    assert.strictEqual(changer('Cat30'), 'dbU30')
    assert.strictEqual(changer('Alice'), 'bmjdf')
    assert.strictEqual(changer('sponge1'), 'tqpOhf1')
    assert.strictEqual(changer('Hello World'), 'Ifmmp xpsmE')
    assert.strictEqual(changer('dogs'), 'Epht')
    assert.strictEqual(changer('z'), 'A')
  })
})
