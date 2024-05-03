const { assert } = require('chai')

const toNumberArray = require('../../src/to_number_array/toNumberArray')

describe('Example tests', () => {
  it('Running toNumberArray("1.1","2.2","3.3")...', function () {
    assert.sameOrderedMembers(
      toNumberArray(['1.1', '2.2', '3.3']),
      [1.1, 2.2, 3.3],
    )
  })
})
