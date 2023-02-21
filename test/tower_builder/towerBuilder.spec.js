const chai = require('chai')
const assert = chai.assert

const Test = {
  assertDeepEquals: assert.deepEqual
}

const towerBuilder = require('../../src/to_tower_builder/toTowerBuilder')

describe('Tests', () => {
  it('test', () => {
    Test.assertDeepEquals(towerBuilder(1), ['*'])
    Test.assertDeepEquals(towerBuilder(2), [' * ', '***'])
    Test.assertDeepEquals(towerBuilder(3), ['  *  ', ' *** ', '*****'])
  })
})
