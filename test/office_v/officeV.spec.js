const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

const meeting = require('../../src/office_v/officeV.js')

describe('Example tests', () => {
  it('Tests', () => {
    assert.deepEqual(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4), [0, 1, 3])
    assert.deepEqual(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5), [0, 0, 1, 2, 2])
    assert.deepEqual(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0), 'Game On')
  })
})
